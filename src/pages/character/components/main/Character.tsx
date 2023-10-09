import { useEffect, useState } from "react";
import {
  BiChevronLeft,
  BiRuler,
  BiDumbbell,
  BiPalette,
  BiCalendar,
  BiWorld,
  BiCameraMovie,
  BiDna,
  BiCar,
  BiRocket,
  BiTimeFive,
  BiLink,
  BiSolidRocket,
  BiSmile,
  BiSolidEyedropper,
  BiSolidBookmark,
  BiBookmark
} from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DomCondition from "@/components/DomCondition";
import styles from "@/utils/customStyles.module.css";
import BrandLogo from "@/components/Brand";
import InfoField from "@/components/InfoField";
import { StateType } from "@/store/initalState";

const propertyIcons: { [key: string]: JSX.Element } = {
  name: <BiRuler />,
  height: <BiRuler />,
  mass: <BiDumbbell />,
  hair_color: <BiPalette />,
  skin_color: <BiSolidEyedropper />,
  eye_color: <BiPalette />,
  birth_year: <BiCalendar />,
  gender: <BiSmile />,
  homeworld: <BiWorld />,
  films: <BiCameraMovie />,
  species: <BiDna />,
  vehicles: <BiCar />,
  starships: <BiRocket />,
  created: <BiTimeFive />,
  edited: <BiTimeFive />,
  url: <BiLink />
};

export default function Character() {
  const navigate = useNavigate();
  const character: any = useSelector((state: StateType) => state.character);
  const [itemId, setItemId] = useState(null);
  const [itemIsFavorited, setItemIsFavorited] = useState(false);
  const favoritedCharacters = useSelector(
    (state: StateType) => state.favoritedCharacters
  );
  const dispatcher = useDispatch();

  useEffect(() => {
    setItemIsFavorited(
      !!favoritedCharacters?.find((character: any) => {
        return character.characterId === itemId;
      })
    );
  }, [favoritedCharacters]);

  useEffect(() => {
    setItemId(character?.url.trim().split("/").reverse()[1]);
  }, [character.url]);

  const addToFavorites = (data: any) => {
    dispatcher({
      type: "ADD_FAVORITE",
      payload: { dispatcher, character: { ...data, id: itemId } }
    });
  };

  const removeFromFavorites = () => {
    dispatcher({
      type: "DELETE_FAVORITE",
      payload: { dispatcher, character: { characterId: itemId } }
    });
  };

  const propertiesToDisplay: string[] = [
    "name",
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender"
    // Add more properties as needed
  ];

  return (
    <div className="h-full w-full grid grid-rows-6 gap-2">
      <div className="row-span-1 flex flex-wrap-reverse items-center w-full h-[auto] p-3 justify-between">
        <b
          onClick={() => navigate(-1)}
          className="flex gap-2 items-center bg-white/10 border border-white/20 p-3 rounded-lg"
        >
          <BiChevronLeft /> Go Back
        </b>
        <div className="mx-auto pr-[100px] py-4">
          <BrandLogo />
        </div>
      </div>

      <div className="h-full row-span-5 w-full flex justify-center items-center rounded-lg">
        <div
          className={
            styles.custom_scrollbar +
            " flex flex-wrap max-h-[90%] p-4 bg-[#0000004f] backdrop-blur-xl border border-white/10 rounded-lg text-white max-w-[70vw] w-full overflow-scroll overflow-x-hidden"
          }
        >
          <div className="w-[200px] h-[170px] flex items-start bg-gray-200 overflow-hidden rounded-lg">
            <img
              className="object-contain w-full"
              src={`https://imager-flax.vercel.app/search-images?q=${character?.name}`}
              alt=""
            />
          </div>
          <div className="p-3">
            {propertiesToDisplay.map(
              (key) =>
                character[key] && (
                  <InfoField
                    key={key}
                    label={key}
                    value={character[key]}
                    icon={propertyIcons[key] || <BiSolidRocket />}
                  />
                )
            )}
          </div>

          <div className="w-full flex flex-col items-center p-3 gap-2">
            <DomCondition condition={itemIsFavorited}>
              <button
                onClick={() => removeFromFavorites()}
                className="min-[300px]:text-[12px] flex items-center justify-center w-full border-2 border-white text-white rounded-full p-3 gap-2"
              >
                Remove from favorites
                <BiSolidBookmark className="text-yellow-400" />
              </button>
            </DomCondition>
            <DomCondition condition={!itemIsFavorited}>
              <button
                onClick={() => addToFavorites(character)}
                className="min-[300px]:text-[12px] flex items-center justify-center w-full border-2 border-white text-white rounded-full p-3 gap-2"
              >
                Add to favorites
                <BiBookmark />
              </button>
            </DomCondition>
          </div>
        </div>
      </div>
    </div>
  );
}

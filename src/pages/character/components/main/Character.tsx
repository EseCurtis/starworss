//@ts-nocheck

import styles from "@/utils/customStyles.module.css";
import BrandLogo from "@/components/Brand";
import InfoField from "@/components/InfoField";
import { StateType } from "@/store/initalState";
import { BiChevronLeft, BiRuler, BiDumbbell, BiPalette, BiCalendar, BiWorld, BiCameraMovie, BiDna, BiCar, BiRocket, BiTimeFive, BiLink, BiSolidRocket, BiSmile, BiSleepy, BiSolidEyedropper } from "react-icons/bi";
import { useSelector } from "react-redux";

interface characterType {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
}

// Define a mapping of property names to icons
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
  url: <BiLink />,
};

export default function Character() {
  const character: characterType = useSelector(
    (state: StateType) => state.character
  );

  // Define an array of properties you want to display
  const propertiesToDisplay: string[] = [
    "name",
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender",
    // Add more properties as needed
  ];

  return (
    <div className="h-full w-full grid grid-rows-6 gap-2">
      <div className=" row-span-1 flex  flex-wrap-reverse items-center w-full h-[auto] p-3 justify-between">
        <b className="flex gap-2 items-center bg-white/10 border border-white/20 p-3 rounded-lg">
          <BiChevronLeft /> Go Back
        </b>
        <div className="mx-auto pr-[100px] py-4">
          <BrandLogo />
        </div>
      </div>

      <div className=" h-full row-span-5 w-full flex justify-center items-center rounded-lg">
      <div className={styles.custom_scrollbar+" flex flex-wrap max-h-[90%] p-4 bg-[#0000004f] backdrop-blur-xl border border-white/10 rounded-lg text-white max-w-[70vw] w-full overflow-scroll overflow-x-hidden"}>
        <div className="w-[200px] h-[170px] flex items-start bg-gray-200 overflow-hidden">
          <img
            className="object-contain w-full"
            src={`http://localhost:3000/search-images?q=${character?.name}`}
            alt=""
          />
        </div>
        <div className="p-3">
          {
            
          propertiesToDisplay.map((key) => (
            character[key] && (
              <InfoField key={key} label={key} value={character[key]} icon={propertyIcons[key] || <BiSolidRocket />} />
            )
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export const FavoritedItem_skeleton = () => {
  return (
    <div className="w-full h-full rounded-lg flex flex-col gap-2 p-2 animate-pulse">
      <div className="bg-gray-300 w-full h-[200px] rounded-lg"></div>
      <div className="w-full flex gap-1">
        <div className="flex flex-col w-[50%] gap-1">
          <div className="flex gap-1 w-full ">
            <span className="p-1 rounded-full bg-gray-300 w-10" />
            <span className="p-1 rounded-full bg-gray-300" />
          </div>
          <span className="p-1 rounded-full bg-gray-300 w-20" />
          <span className="p-1 rounded-full bg-gray-300 w-12" />
        </div>
        <div className="flex flex-col items-end w-[50%] gap-1">
          <div className="flex justify-end gap-1 w-full">
            <span className="p-2 rounded-full bg-gray-300" />
            <span className="p-2 rounded-md bg-gray-300 w-6" />
          </div>
          <span className="p-1 rounded-full bg-gray-300 w-10" />
        </div>
      </div>
    </div>
  );
};

export const FavoritedItem = () => {
  return <FavoritedItem_skeleton />;
};

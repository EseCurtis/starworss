import Characters from "./main/Characters";

export default function MainContent() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center overflow-hidden pr-3">
      <div className="w-full pl-2">
        <div className=" bg-[#070811] rounded-lg text-white p-5">
            <h3 className="font-bold">Header</h3>
        </div>
      </div>

      <Characters/>
    </div>
  );
}

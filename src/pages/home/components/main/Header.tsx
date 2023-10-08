import BasicInput from "@/components/Input";

export default function Header() {
  return (
    <div className="flex justify-end rounded-lg text-white p-5 backdrop-blur-sm border border-white/10 max-[1050px]:p-1 max-[1050px]:justify-start">
      <div className="">
        <BasicInput twStyles=" min-[300px]:text-[12px] p-3 rounded-lg border border-white/10 bg-white/10 focus:border-blue-500 max-w-[100%] min-[300px]:w-[100%]" placeholder="/ Search for a character"/>
      </div>
    </div>
  );
}

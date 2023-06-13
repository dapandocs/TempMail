import Image from "next/image";

function Navigation() {
  return (
    <div className="h-16 text-slate-100 max-w-[1440px] m-auto flex items-center p-4 lg:p-0">
      <div className="w-1/2 flex items-center">
        <Image
          className="rotate-12 hover:rotate-45 transition-all"
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          priority={true}
        />
        <h2 className="text-xl ml-4 select-none">Temp Mail</h2>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          className="hover:opacity-70 opacity-100 transition-all cursor-pointer"
          src="/github.svg"
          alt="github"
          width={40}
          height={40}
          priority={true}
        />
      </div>
    </div>
  );
}

export default Navigation;

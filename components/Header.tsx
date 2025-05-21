import Image from "next/image";
import Logo from "@/public/images/movie-explorer-logo.png";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="bg-slate-500 border-b border-slate-800">
      <nav className="flex items-center justify-evenly py-3 px-5">
        <div className="flex gap-2 justify-center items-center">
          <div className="bg-slate-400 rounded-full p-1">
            <Image
              src={Logo}
              alt="Movie Explorer Logo"
              width={30}
              height={30}
            />
          </div>
          <h1 className="text-3xl font-bold">
            Movie <span className="text-emerald-400">Explorer</span>
          </h1>
        </div>
        <BurgerMenu />
      </nav>
    </header>
  );
};

export default Header;

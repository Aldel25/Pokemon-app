import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-center px-5 py-3 font-bold bg-slate-300 shadow-lg">
      <div className="flex flex-row gap-10">
        <Link to={"/"} className="font-mono text-white">
          Home
        </Link>
        <Link to={"/MyPokemon"} className="font-mono text-white">
          My Pokemon
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

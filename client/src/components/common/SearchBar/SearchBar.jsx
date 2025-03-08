import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../Button/Button";

const SearchBar = () => {
  return (
    <div className="flex w-full max-w-xs items-center sm:max-w-sm md:max-w-md xl:max-w-lg">
      <label className="input w-full rounded-r-none !outline-none !ring-0 [&>input]:!outline-none [&>input]:!ring-0">
        <HiMagnifyingGlass size={"1em"} className="opacity-65" />
        <input type="search" required placeholder="Search" className="w-full" />
      </label>
      <Button className="rounded-l-none max-md:px-4">
        <HiMagnifyingGlass size={"1.5em"} className="md:hidden" />
        <span className="hidden md:block">Search</span>
      </Button>
    </div>
  );
};

export default SearchBar;

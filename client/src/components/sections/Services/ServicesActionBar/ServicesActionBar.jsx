import SearchBar from "@/components/common/SearchBar/SearchBar";
import SortOptions from "@/components/common/SortOptions/SortOptions";

const ServicesActionBar = () => {
  return (
    <div className="xl:px-30 border-b-1 lg:gap-x-30 mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 border-gray-200 pb-5 transition-all duration-300 ease-in-out md:gap-x-10 md:px-10 md:pb-10 lg:px-20">
      <SearchBar />
      <SortOptions />
    </div>
  );
};

export default ServicesActionBar;

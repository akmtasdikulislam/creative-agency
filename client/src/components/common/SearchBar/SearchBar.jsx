import { useForm } from "react-hook-form";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../Button/Button";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle search logic here
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-xs items-center sm:max-w-sm md:max-w-md xl:max-w-lg"
    >
      <label className="input w-full rounded-r-none !outline-none !ring-0 [&>input]:!outline-none [&>input]:!ring-0">
        <HiMagnifyingGlass size={"1em"} className="opacity-65" />
        <input
          type="search"
          placeholder="Search"
          className="w-full"
          {...register("searchTerm", {
            required: "Please enter a search term",
            minLength: {
              value: 2,
              message: "Search term must be at least 2 characters",
            },
          })}
        />
      </label>
      {errors.searchTerm && (
        <span className="text-error absolute mt-16 text-xs">
          {errors.searchTerm.message}
        </span>
      )}
      <Button type="submit" className="rounded-l-none max-md:px-4">
        <HiMagnifyingGlass size={"1.5em"} className="md:hidden" />
        <span className="hidden md:block">Search</span>
      </Button>
    </form>
  );
};

export default SearchBar;

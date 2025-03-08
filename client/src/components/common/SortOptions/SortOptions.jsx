import { useForm } from "react-hook-form";
import { HiCheck } from "react-icons/hi2";
import Button from "../Button/Button";

const SortOptions = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sortOrder: "",
    },
  });

  const selectedSort = watch("sortOrder");

  const onSubmit = (data) => {
    // Handle sort logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
      <span className="mr-2 text-sm">Sort by:</span>
      <select
        className={`select select-bordered select-sm w-40 ${
          selectedSort && "rounded-r-none"
        } hover:border-neutral !outline-none !ring-0 transition-colors hover:cursor-pointer`}
        {...register("sortOrder", {
          required: "Please select a sort order",
        })}
      >
        <option value="">Select order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {errors.sortOrder && (
        <span className="text-error absolute mt-16 text-xs">
          {errors.sortOrder.message}
        </span>
      )}

      {selectedSort && (
        <Button
          type="submit"
          variant="primary"
          size="sm"
          className="rounded-l-none px-6 max-md:px-4"
        >
          <HiCheck size={"1.5em"} />
          <span className="hidden md:block">Apply</span>
        </Button>
      )}
    </form>
  );
};

export default SortOptions;

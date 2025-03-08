import { useState } from "react";
import { HiCheck } from "react-icons/hi2";
import Button from "../Button/Button";

const SortOptions = () => {
  const [selectedSort, setSelectedSort] = useState("");

  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm">Sort by:</span>
      <select
        className={`select select-bordered select-sm w-40 ${selectedSort && "rounded-r-none"} !outline-none !ring-0`}
        value={selectedSort}
        onChange={(e) => {
          e.target.value !== selectedSort && setSelectedSort(e.target.value);
        }}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {selectedSort && (
        <Button
          variant="primary"
          size="sm"
          className="rounded-l-none px-6 max-md:px-4"
        >
          <HiCheck size={"1.5em"} />
          <span className="hidden md:block">Apply</span>
        </Button>
      )}
    </div>
  );
};

export default SortOptions;

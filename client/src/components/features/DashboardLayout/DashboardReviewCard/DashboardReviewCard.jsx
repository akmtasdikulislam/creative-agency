const DashboardReviewCard = ({ review }) => {
  const { name, designation, companyName, reviewText, date } = review;
  return (
    <div className="border-1 border-accent-200 max-h-70 sm:min-w-xs flex flex-auto flex-col gap-4 overflow-hidden rounded-lg bg-white p-5 shadow-sm transition-all duration-500 hover:cursor-pointer hover:shadow-lg focus:shadow-lg active:shadow-lg sm:max-w-md sm:flex-1">
      <div>
        <div className="flex w-full items-center justify-between gap-4">
          <p className="body-text font-bold">{name}</p>
          <div className="tw-badge tw-badge-neutral">{date}</div>
        </div>
        <p className="body-xs font-medium">
          {designation}, {companyName}
        </p>
      </div>
      <div className="flex w-full">
        <p className="text-text-secondary line-clamp-4 text-sm">{reviewText}</p>
      </div>
    </div>
  );
};

export default DashboardReviewCard;

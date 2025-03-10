const DashboardServiceCard = ({ service }) => {
  const { title, description, imageUrl, status } = service;
  return (
    <div className="card bg-base-100 border-1 border-accent-200 sm:min-w-xs w-full flex-auto shadow-sm transition-all duration-500 hover:cursor-pointer hover:shadow-lg focus:shadow-lg active:shadow-lg sm:max-w-md sm:flex-1">
      <div className="flex items-start justify-between px-7 pt-6">
        <img src={imageUrl} alt={title} className="w-15 h-auto rounded-full" />
        <div className={`tw-badge tw-badge-${status} capitalize`}>{status}</div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="text-text-secondary body-sm line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DashboardServiceCard;

const ServiceCard = ({ service }) => {
  const { title, description, imageUrl } = service;
  return (
    <div className="card bg-base-100 w-full flex-auto shadow-sm transition-all duration-500 hover:cursor-pointer hover:shadow-2xl focus:shadow-2xl active:shadow-2xl sm:w-80 md:flex-none">
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt={title} className="h-auto w-20 rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h5 className="card-title">{title}</h5>
        <p className="text-text-secondary body-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

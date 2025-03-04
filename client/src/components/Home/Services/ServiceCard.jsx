import React from "react";

const ServiceCard = ({ service }) => {
  const { title, description, imageUrl } = service;
  return (
    <div
      className="card bg-base-100 w-full flex-auto shadow-sm transition-all duration-500 hover:cursor-pointer hover:shadow-2xl sm:w-80 md:flex-none"
      onClick={() => console.log(service)}
    >
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt={title} className="h-auto w-20 rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-neutral-color">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

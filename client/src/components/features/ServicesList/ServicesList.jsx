const ServicesList = ({ children, className }) => {
  return (
    <div
      className={`xl:px-30 flex flex-wrap items-center justify-center gap-5 px-5 md:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default ServicesList;

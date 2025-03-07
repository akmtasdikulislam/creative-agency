import fallbackAvatar from "@assets/images/customers/fallbackAvatar.png";
import PropTypes from "prop-types";
const ReviewCard = ({ review }) => {
  const { name, imageUrl, reviewText, designation, companyName } = review;

  const handleImageError = (e) => {
    e.target.src = fallbackAvatar;
  };

  return (
    <div className="card bg-base-100 sm:max-w-100 w-full flex-auto shadow-sm transition-all duration-500 hover:cursor-pointer hover:shadow-2xl focus:shadow-2xl active:shadow-2xl sm:w-80 md:flex-none lg:w-auto">
      <div className="card-title flex items-center gap-4">
        <figure className="pl-7 pt-10">
          <img
            src={imageUrl}
            alt={name}
            className="h-12 w-12 rounded-full"
            loading="lazy"
            onError={handleImageError}
          />
        </figure>
        <div className="reviewer pt-10">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm">
            {designation}, {companyName}
          </p>
        </div>
      </div>
      <div className="card-body items-center">
        <p className="text-neutral-color">{reviewText}</p>
      </div>
    </div>
  );
};
ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  }).isRequired,
};
export default ReviewCard;

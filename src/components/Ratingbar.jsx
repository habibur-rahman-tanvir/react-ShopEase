import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const renderStars = (rating, maxRating) => {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return stars;
};

const Ratingbar = ({ rating = 0, maxRating = 5 }) => {
  return <span className="flex gap-0.5">{renderStars(rating, maxRating)}</span>;
};

export default Ratingbar;

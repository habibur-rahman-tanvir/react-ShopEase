import Ratingbar from "./Ratingbar";
import userPlaceholder from "../assets/user.png";
const Review = ({ item: { rating, comment, reviewerName, date } }) => {
  return (
    <div className="mb-10">
      <div className="flex gap-2">
        <img
          className="w-10 h-10 rounded-full ring-1 ring-emerald-800 ring-offset-1"
          src={userPlaceholder}
          alt={reviewerName}
        />
        <div className="w-full space-y-1">
          <Ratingbar rating={rating} />
          <p className="text-gray-500">{reviewerName}</p>
          <p className="font-semibold">{comment}</p>
          <p className="text-gray-400">{date}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Review;

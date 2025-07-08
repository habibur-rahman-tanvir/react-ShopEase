import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = ({ item }) => {
  const navigate = useNavigate();

  const gotoDetailsPage = (id) => {
    navigate(`/details/${id}`);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
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

  return (
    <div
      onClick={() => gotoDetailsPage(item.id)}
      className="p-4 transition-all duration-300 hover:shadow-md hover:shadow-black bg-white rounded-lg shadow-md min-w-[220px] max-w-[300px] w-full"
    >
      <img src={item.images[0]} alt={item.title} />
      <p>{item.title}</p>
      <p>
        <span className="text-red-600 text-xl font-semibold">
          ${item.price}{" "}
        </span>
        <span className="text-gray-500">-{item.discountPercentage}%</span>

        <div className="flex items-center space-x-1 mt-1">
          {renderStars(item.rating)}
          <span className="text-sm text-gray-600 ml-1">({item.rating})</span>
        </div>
      </p>
    </div>
  );
};

export default Cart;

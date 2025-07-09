import { useNavigate } from "react-router-dom";
import Ratingbar from "./Ratingbar";

const Cart = ({ item }) => {
  const navigate = useNavigate();

  const gotoDetailsPage = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      onClick={() => gotoDetailsPage(item.id)}
      className="p-4 transition-all duration-300 hover:shadow-md hover:shadow-black bg-white rounded-lg shadow-md min-w-[220px] max-w-[300px] w-full"
    >
      <img src={item.thumbnail} alt={item.title} />
      <p className="font-semibold text-gray-800 ">{item.title}</p>
      <div>
        <span className="text-xl font-semibold text-red-600">
          ${item.price}{" "}
        </span>
        <span className="text-gray-500">-{item.discountPercentage}%</span>
        <div className="flex items-center mt-1 space-x-1">
          <Ratingbar rating={item.rating} />
          <span className="ml-1 text-sm text-gray-600">({item.rating})</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;

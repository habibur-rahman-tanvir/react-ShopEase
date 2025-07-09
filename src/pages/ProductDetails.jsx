import { useLoaderData } from "react-router-dom";
import Ratingbar from "../components/Ratingbar";
import Review from "../components/Review";

export const loader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return { data };
};

const ProductDetails = () => {
  const {
    data: {
      images,
      title,
      price,
      discountPercentage: discount,
      description,
      rating,
      reviews,
      stock,
      tags,
      brand,
      weight,
      dimensions: { width, height, depth },
      warrantyInformation,
      shippingInformation,
      returnPolicy,
      availabilityStatus,
      minimumOrderQuantity,
    },
  } = useLoaderData();

  return (
    <div className="p-3 bg-white rounded-sm">
      <div className="flex">
        <img className="w-[40%]" src={images[0]} alt={title} />
        <div className="space-y-3">
          <p>
            <span className="text-5xl font-bold ">${price} </span>
            <span className="text-2xl text-gray-700">
              <del>${(price + (price / 100) * discount).toFixed(2)}</del>
            </span>{" "}
            <span className="text-2xl text-red-700">{discount}% off</span>
          </p>
          <p className="text-2xl font-semibold">{title}</p>
          <p className="font-normal text-gray-800">{description}</p>
          <p className="flex items-center gap-2">
            <Ratingbar rating={rating} />
            <span className="font-bold">{rating}</span>
            <span className="text-gray-500">{reviews.length} Reviews</span>
            <span
              className={` font-semibold text-shadow-2xs text-shadow-black ${
                stock === 0
                  ? "text-red-700"
                  : stock > 0 && stock <= 3
                  ? "text-yellow-500"
                  : "text-green-700"
              }`}
            >
              {stock} Stock
            </span>
          </p>
          <hr />
          <p>
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="border m-0.5 p-0.5 rounded-sm text-gray-400 font-light"
                >
                  {tag}
                </span>
              );
            })}
          </p>
          <div className="flex items-center">
            <div className="flex flex-col w-1/2 space-y-2 text-xl">
              <button className="bg-red-600 py-1.5 rounded-sm text-white font-semibold">
                Buy Now
              </button>
              <button className="font-semibold py-1.5 rounded-sm border">
                Add to Cart
              </button>
            </div>
            <div className="text-center space-y-1 my-2.5 bg-gray-50 rounded-sm p-2 ml-3">
              <p className="font-bold">Quantity</p>
              <p>
                <button className="text-black bg-gray-200 rounded-full aspect-square w-7">
                  -
                </button>{" "}
                <span className="px-1 text-xl">1</span>{" "}
                <button className="text-black bg-gray-200 rounded-full aspect-square w-7">
                  +
                </button>
              </p>
              <p className="text-gray-500">{stock} available</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-2">
        <strong className="text-2xl">Details</strong>
        <div className="mt-2 ml-2 space-y-1">
          <p>
            <span className="font-semibold text-black">Brand:</span> {brand}
          </p>
          <p>
            <span className="font-semibold text-black">Weight:</span> {weight}
          </p>
          <p>
            <span className="font-semibold text-black">Dimensions:</span>{" "}
            {width} x {height} x {depth}
          </p>
          <p>
            <span className="font-semibold text-black">Warranty:</span>{" "}
            {warrantyInformation}
          </p>
          <p>
            <span className="font-semibold text-black">Shipping:</span>{" "}
            {shippingInformation}
          </p>
          <p>
            <span className="font-semibold text-black">Return Policy:</span>{" "}
            {returnPolicy}
          </p>
        </div>
      </div>
      <hr />
      <div className="py-2">
        <strong className="text-2xl">
          Reviews{" "}
          <span className="font-normal text-gray-600">({reviews.length})</span>
        </strong>
        <div className="pl-2.5 pt-5">
          {reviews.map((item, index) => {
            return <Review key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

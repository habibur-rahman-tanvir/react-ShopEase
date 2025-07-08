import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return { data };
};

const ProductDetails = () => {
  const { data: product } = useLoaderData();

  return (
    <div>
      <h1>Product Details</h1>
      <p>{product.id}</p>
    </div>
  );
};

export default ProductDetails;

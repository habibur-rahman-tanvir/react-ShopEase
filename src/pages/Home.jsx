import { useEffect, useState } from "react";
import Cart from "../components/Cart";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="m-1 text-center bg-white rounded shadow shadow-black">
        Filter Bar
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.products?.length > 0
          ? data.products.map((item) => <Cart key={item.id} item={item} />)
          : "Loading"}
      </div>
    </div>
  );
};

export default Home;

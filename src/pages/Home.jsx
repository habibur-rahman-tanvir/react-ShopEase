import { useEffect, useState } from "react";
import Cart from "../components/Cart";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
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
      <div className="bg-white m-1 shadow shadow-black text-center rounded">
        Filter Bar
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.products?.length > 0
          ? data.products.map((item) => <Cart key={item.id} item={item} />)
          : "Loading"}
      </div>
    </div>
  );
};

export default Home;

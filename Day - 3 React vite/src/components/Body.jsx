import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import {
  postProducts,
  deleteProduct,
  getProducts,
  replaceProduct,
} from "../services/api2";

const Body = () => {
  const [productList, setProductList] = useState([]);

  // Fetch Products
  const load = async () => {
    const products = await getProducts("/api/products");
    setProductList(products);
  };

  useEffect(() => {
    load();
  }, []);

  // POST Product
  const handlePost = async () => {
    const newProduct = {
      id: 5,
      name: "Air Buds",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSA7rusF9rOr-xyMlncnq7MM9VBQQNJWqDIVlzWhjE2-80Telk9H_3kWjaxeC9RSHPu0goCtBCdnHLffw_dsSfFHU-xcWF6w3lCfK5g85nfWHUUG46H-9KA0A",
      price: 11900,
      description: "Apple AirPods Pro with MagSafe Charging Case",
      rating: 4.7,
    };

    const msg = await postProducts("/api/products", newProduct);
    console.log(msg);
    load();
  };

  // DELETE Product
  const handleDelete = async () => {
    const msg = await deleteProduct("/api/products",5);
    console.log(msg);
    load();
  };
const replaceProd = {
      id: 10,
      name: "Air Buds",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSA7rusF9rOr-xyMlncnq7MM9VBQQNJWqDIVlzWhjE2-80Telk9H_3kWjaxeC9RSHPu0goCtBCdnHLffw_dsSfFHU-xcWF6w3lCfK5g85nfWHUUG46H-9KA0A",
      price: 11900,
      description: "Apple AirPods Pro with MagSafe Charging Case",
      rating: 4.7,
    };
  // PUT / REPLACE Product
  const handleReplace = async () => {
    const message = await replaceProduct("/api/products", 1, replaceProd);
    console.log(message);
    load();
  };

  return (
    <>
      <div className="center-container">
        {productList.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="card-container">
            {productList.map((element, index) => (
              <Card key={index} item={element} />
            ))}
          </div>
        )}

        <div className="btn-container">
          <button onClick={handlePost}>POST</button>
          <button onClick={handleDelete}>DELETE</button>
          <button onClick={handleReplace}>REPLACE</button>
        </div>
      </div>
    </>
  );
};

export default Body;

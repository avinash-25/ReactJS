import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import Card from "./Card";
import './style.css';
import SearchBar from './SearchBar';

const Container = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await fetch("https://api.theindianhome.in/api/product/list");
    // const res = await fetch("https://www.meesho.com/api/v1/feed");
    const data = await res.json();
    setAllProducts(data.products);   // Orignal list of products
    setResponse(data.products);      // this will rendered first time without any filter
  };

  const topRatedProducts = () => {
    const filtered = allProducts.filter(p => p.rating > 4.0);

    if (filtered.length === 0) {
      alert("No products with rating above 4.0");
    } else {
      setResponse(filtered);
    }
  };

  const highToLow = () => {
    const sorted = [...allProducts].sort((a, b) => b.price - a.price);
    setResponse(sorted);
  };

  const lowToHigh = () => {
    const sorted = [...allProducts].sort((a, b) => a.price - b.price);
    setResponse(sorted);
  };

  const resetResponse = () => {
    setResponse(allProducts);
  };

  return response.length === 0 ? <Shimmer /> : (
    <>
      <SearchBar/>
      <div className="top-banner">
        <button onClick={topRatedProducts}>Top rated products</button>
        <button onClick={highToLow}>High to Low</button>
        <button onClick={lowToHigh}>Low to High</button>
        <button onClick={resetResponse}>Clear All Filter</button>
      </div>

      <div className="card-container">
        {response.map(element => (
          <Card key={element._id} {...element} />
        ))}
      </div>
    </>
  );
};

export default Container;

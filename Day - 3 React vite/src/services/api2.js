import axios from "axios";

//! Axios Instance

const app = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});


//! GET Request

export const getProducts = async (endPoint) => {
  const { data } = await app.get(endPoint);
  return data;
};

//! POST product

export const postProducts = async (endPoint, obj) => {
  const { data } = await app.post(endPoint, obj); // No JSON.stringify needed
  return data;
};


//! Delete product

export const deleteProduct = async (endPoint, id) => {
  const { data } = await app.delete(`${endPoint}/${id}`);
  return data;
};


//! PUT Request (Replace Entire Resource)

export const replaceProduct = async (endPoint, id, obj) => {
   const { data } = await app.put(`${endPoint}/${id}`, obj);
   console.log("product replaced successfully");
  return data;
};


//! PATCH Request (Update Partial Resource)

export const updateProduct = async (endPoint, id, obj) => {
  const { data } = await app.patch(`${endPoint}/${id}`, obj);
  return data;
};

import axios from "axios";


// GET Request
/**
 *   Basic Axios
 *   Axios Instance
 *   Axios Interceptors
 */

//Instabce

const app = axios.create({
   baseURL: "http://localhost:4000",
   headers: {
      "Content-Type": "application/json"
   },
   timeout: 5000
})


//! get request

export const getProducts = async (endPoint) =>{
   const {data} = await app.get(endPoint);
   return data;
}

//! post request

export const postProducts = async (endPoint,obj) =>{
   const { data } = await app.post(endPoint, JSON.stringify(obj));
   return data;
}

//! delete request

export const deleteProduct = async (endPoint, id) => {
  const { data } = await app.delete(`${endPoint}/${id}`);
  return data;
};


//! PUT request

export const replaceProduct = async (endPoint, id, obj) => {
   const response = await fetch(`${baseURL}${endPoint}/${id}`, {
      method: PUT,
      
   })
}
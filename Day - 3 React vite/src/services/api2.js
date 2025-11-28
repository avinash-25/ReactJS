import axios from 'axios';

const BASE_URL = "http://localhost:4000";

export const getProducts = async (endpoint) => {
    const {data} = await axios.get(`${BASE_URL}${endpoint}`)
    
    return data;
    
    // console.log("Response : ", response);
    
}


/*
response = {
        data: [],
        config: {},
        stattus: 200,
        and many more things are came in response.
    } */
// API connection functions

const API_URL = "http://localhost:5000/api";

// example function
async function getProducts(){
    const res = await fetch(API_URL + "/products");
    const data = await res.json();
    return data;
}
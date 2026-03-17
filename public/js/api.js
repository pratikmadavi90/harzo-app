// API connection functions

const API_URL = "https://harzo-app.onrender.com/api";

// example function
async function getProducts(){
    const res = await fetch(API_URL + "/products");
    const data = await res.json();
    return data;
}
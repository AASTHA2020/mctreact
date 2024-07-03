import axios from "axios";
export async function productsData() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data); 
      return response.data;
    } catch (error) {
      console.error("Error fetching products data:", error);
      throw error;
    }
  }
  
const API_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}?limit=24`);
  const data = await response.json();

  return data.products;
};

export const getProduct = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const getCategories = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/categories"
  );

  return response.json();
};
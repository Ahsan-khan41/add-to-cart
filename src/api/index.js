const base_url = "http://localhost:5000/api/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(base_url).then((r) => r.json());
    return response;
  } catch (error) {
    return null;
  }
};

export const fetchOneProduct = async (param) => {
  try {
    const response = await fetch(`${base_url}/${param}`).then((r) => r.json());
    return response;
  } catch (error) {
    return null;
  }
};

import axios from "axios";

const DEV_TO_API_BASE_URL = "https://dev.to/api/articles?username=subhashjha35";

export const fetchDevToBlogs = async () => {
  try {
    const response = await axios.get(`${DEV_TO_API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching dev.to blogs:", error);
    return [];
  }
};

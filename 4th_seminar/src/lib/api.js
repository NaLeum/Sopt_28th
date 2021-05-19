import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:4000",
});

export const getCardData = async () => {
  try {
    const data = await request.get("/posts");
    return data.data.data;
  } catch (e) {
    return null;
  }
};

export const createCardData = async (userData) => {
  try {
    const data = await request.post("/posts", {
      data: userData,
    });
    return data.data.data;
  } catch (e) {
    return null;
  }
};

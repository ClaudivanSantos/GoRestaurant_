import axios from "axios";

const api = axios.create({
  baseURL: "https://apigorestaurant.herokuapp.com",
});

export default api;

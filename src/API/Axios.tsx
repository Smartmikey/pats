import axios from "axios";
// require('dotenv').config()

const Axios = axios.create({
  // baseURL: 'http://localhost/api',
  baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: true,
});

// console.log(process.env.REACT_APP_API_URL)

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};

export const getAllPets = async () => {
  const res = await axios.get("/breeder/pets/");
  
};
export default Axios
// export const getPets =

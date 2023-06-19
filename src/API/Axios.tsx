import axios from "axios";

export default axios.create({
  // baseURL: "http://api.yourpats.com/api/",
  baseURL: "http://localhost/api",
});

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};

export const getAllPets = async () => {
  const res = await axios.get("/breeder/pets/");
  
};

// export const getPets =

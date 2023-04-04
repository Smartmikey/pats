import axios from "axios";

export default axios.create({
  baseURL: "http://api.yourpats.com/api/",
});


export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};

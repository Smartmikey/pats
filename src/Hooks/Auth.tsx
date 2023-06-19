import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import {useCookies} from "react-cookie";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken, removeToken] = useCookies(["token"]);

  useEffect(() => {
    const token = userToken.token;
    if (!token || token == null) {
       setUser(null);
       return;
    } else {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        removeToken("token");
      } else {
        setUser(decodedToken);
      }
    }
  }, []);

  return user;
};

export default useAuth;

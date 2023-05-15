import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('jwtToken');
      } else {
        setUser(decodedToken);
      }
    }
  }, []);

  return user;
};

export default useAuth;
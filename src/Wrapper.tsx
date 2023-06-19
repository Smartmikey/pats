import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {useCookies} from 'react-cookie';

interface WrapperProps {
  allowedPaths: {
    breeder: string[];
    user: string[];
    unregistered: string[];
  };
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ allowedPaths, children }) => {
  const navigate = useHistory();
  const location = useLocation();
  const [userToken, setUserToken ]= useCookies(['token'])

  useEffect(() => {
    const token = userToken.token;
    
    if (!token) {
      // Redirect to login page if no token is found
      console.log(token);
      navigate.push('/login');
    } else {
      const decodedToken: any = jwtDecode(token);

      // Get the user role from the decoded token
      const role = decodedToken.role;

      if (role === 'ROLE_MEMBER') {
        if (!allowedPaths.breeder.includes(location.pathname)) {
          // Redirect to unauthorized page for breeders
          navigate.push('/unauthorized');
        }
      } else if (role === 'ROLE_USER') {
        if (!allowedPaths.user.includes(location.pathname)) {
          // Redirect to unauthorized page for users
          navigate.push('/unauthorized');
        }
      } else {
        if (!allowedPaths.unregistered.includes(location.pathname)) {
          // Redirect to unauthorized page for unregistered users
          navigate.push('/unauthorized');
        }
      }
    }
  }, [navigate, location.pathname, allowedPaths]);

  return <>{children}</>;
};

export default Wrapper;

import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';

interface WrapperProps {
  allowedPaths: {
    breeder: string[];
    user: string[];
    unregistered: string[];
    special?: string[]; // Add a new special category
  };
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ allowedPaths, children }) => {
  const navigate = useHistory();
  const location = useLocation();
  const [userToken] = useCookies(['token']);

  useEffect(() => {
    const token = userToken.token;

    if (!token) {
      // Redirect to login page if no token is found
      navigate.push('/login');
    } else {
      const decodedToken: any = jwtDecode(token);

      // Get the user role from the decoded token
      const role = decodedToken.role;

      if (role === 'ROLE_MEMBER') {
        if (!isPathAllowed(location.pathname, allowedPaths.breeder)) {
          // Redirect to unauthorized page for breeders
          navigate.push('/unauthorized');
        }
      } else if (role === 'ROLE_USER') {
        if (!isPathAllowed(location.pathname, allowedPaths.user)) {
          // Redirect to unauthorized page for users
          navigate.push('/unauthorized');
        }
      } else {
        if (!isPathAllowed(location.pathname, allowedPaths.unregistered)) {
          // Redirect to unauthorized page for unregistered users
          navigate.push('/unauthorized');
        }
      }
    }
  }, [navigate, location.pathname, allowedPaths, userToken]);

  const isPathAllowed = (pathname: string, allowedPaths: string[]) => {
    for (const path of allowedPaths) {
      // Check if the pathname matches the allowed path or contains a special ID
      if (pathname === path || pathname.startsWith(path + '/')) {
        return true;
      }
    }
    return false;
  };

  return <>{children}</>;
};

export default Wrapper;
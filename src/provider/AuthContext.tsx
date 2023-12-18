/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {createContext, useContext, useEffect, useMemo, useState} from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import {axioswithCredentials} from "../api/axios";
type UserContextType = {
  authenticated: boolean | null | undefined;
  user: any;
  setAuthenticated: (isLoggined: boolean) => Promise<void>;
  setUser: (user: any) => void;
};

// TODO: Remove promise setAuthenticated unnecessarily
// TODO: Loading State: from last chatGTP
interface Props {
  children: React.JSX.Element | "";
}

const AuthContext = createContext<UserContextType>({
  authenticated: null,
  user: null,
  setAuthenticated: async () => {},
  setUser: () => {},
});

const AuthProvider = ({children}: Props) => {
  // State to hold the authentication token
  const [user, setUser_] = useState<any>();
  const refresh = useRefreshToken();
  const [authenticated, setAuthenticated_] = useState<boolean | null>(null);

  const tryRefreshToken = async () => {
    try {
      await refresh();
      await setAuthenticated(true);
    } catch (error) {
      await setAuthenticated(false);
    }
  };

  const isLoggined = async () => {
    try {
      const isLoggined = await axioswithCredentials("api/auth/whoami");
      if (isLoggined.status === 200) {
        await setAuthenticated(true);
      }
    } catch (error: any) {
      tryRefreshToken();
    }
  };

  const setUser = (user: any) => {
    setUser_(user);
  };

  const setAuthenticated = (value: boolean): Promise<void> => {
    return new Promise(resolve => {
      setAuthenticated_(value);
      resolve();
    });
  };

  useEffect(() => {
    isLoggined();
    const userData = localStorage.getItem("user");
    console.log(userData);
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    }
  }, [authenticated]);

  useEffect(() => {
    if (authenticated !== undefined && authenticated !== null) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [authenticated, user]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      authenticated,
      user,
      setAuthenticated,
      setUser,
    }),
    [authenticated, user],
  );
  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>
      {authenticated !== undefined && authenticated !== null && children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export {AuthProvider, useAuth};

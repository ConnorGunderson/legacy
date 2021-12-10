import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import config from "../client.config";
const { HOST } = config;

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useAuthProvider = () => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    setError(false);
    setLoading(true);
    try {
      const {data} = await axios.post(config.HOST + "/api/auth/login", {
        email,
        password,
      });
      if (data) {
        setError(false)
        return setUser(data);
      }
    } catch (e) {
      setUser(false);
      return setError("error/auth-invalid-credentials");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    return setUser(false);
  };

  const createUser = async (name, email, password) => {
    setError(false);
    setLoading(true);

    try {
      const user = await axios.post(`${HOST}/api/auth/new`, {
        name,
        email,
        password,
      });

      if (user.data) {
        return setUser(user.data);
      }
      return;
    } catch (e) {
      setUser(false);
      return setError("error/auth-invalid-fields");
    }
  };

  useEffect(() => {
    setLoading(true);
    if (user) {
      setLoading(false);
      return window.sessionStorage.setItem("user", JSON.stringify(user));
    }
    const sessionUser = window.sessionStorage.getItem("user");
    if (!sessionUser) {
      setUser(false);
    } else {
      setUser(JSON.parse(sessionUser));
    }
    setLoading(false);
  }, [user]);

  return {
    user,
    error,
    loading,
    setError,
    login,
    logout,
    createUser,
  };
};

import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserProfile } from "../api/userService";

const AuthContext = createContext();

const TOKEN_KEY = "ecom_token";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!!token);

  useEffect(() => {
    if (!token) {
      setUser(null);
      setLoading(false);
      localStorage.removeItem(TOKEN_KEY);
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profile = await getUserProfile();
        setUser(profile);
      } catch (error) {
        console.error("Unable to fetch user profile", error);
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const login = (newToken, profile) => {
    localStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);
    if (profile) {
      setUser(profile);
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


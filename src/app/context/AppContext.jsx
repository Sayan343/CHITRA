"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setuser] = useState(null);
  const [showLogin, setshowLogin] = useState(false);
  const [token, settoken] = useState(null);
  const [Credit, setCredit] = useState(null);
  const router = useRouter(); // ✅ now correctly placed inside the component

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const loadCreditData = async () => {
    console.log("Token:", token);
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credit", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        setCredit(data.credits);
        setuser(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const generateImage = async (prompt) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const data = response.data; // ✅ Correct way
  
      if (data.success) {
        loadCreditData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditData();
        if (data.creditBalance === 0) {
          router.push("/BuyCredit");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    settoken(null);
    setuser(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) settoken(storedToken);
  }, []);

  const value = {
    user,
    setuser,
    showLogin,
    backendUrl,
    token,
    settoken,
    setCredit,
    Credit,
    loadCreditData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

import { createContext, useEffect, useState } from "react";
import { getUserDetails } from "../api/UserApi";

export const UserContext = createContext();

export const UserProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("loginStatus")) ? true: false);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userInfo")) ? true : false);

  const getUserDetailsFromContext = async () => {
      const {data} = await getUserDetails();
      if (data.success) {
        setIsLoggedIn(true);
        setUserData(data.data);
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("userInfo", JSON.stringify(data.data));
      }
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loginStatus"))) {
      setIsLoggedIn(JSON.parse(localStorage.getItem("loginStatus")));
      setUserData(JSON.parse(localStorage.getItem("userInfo")));
    } else {
      getUserDetailsFromContext();
    }
    
  }, [])

  let value = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserDetailsFromContext
  };

  return <UserContext.Provider value={value}>
    {props.children}
  </UserContext.Provider>
} 
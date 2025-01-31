import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContext';

const ProtectedLayout = ({children, authRequired=true}) => {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const {isLoggedIn} = useContext(UserContext);

  // console.log("auth Required :", authRequired);
  // console.log("isLoggedIn : ", isLoggedIn);

  useEffect(() => {
    if (authRequired && authRequired !== isLoggedIn) {
      navigate('/signin');
    }
    else if (!authRequired && authRequired !== isLoggedIn) {
      navigate('/');
    } 
    setLoader(false);
  }, [authRequired, navigate, isLoggedIn])

  return loader ? null :
    (<>{children}</>);

}

export default ProtectedLayout;
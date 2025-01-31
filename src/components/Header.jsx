import React, {useContext, useState} from 'react';
import { logoutUser } from '../api/UserApi';
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(false);
  const {setIsLoggedIn, setUserData, userData, isLoggedIn} = useContext(UserContext);

  const onSubmitLogout = async () => {
    try {
      const {data} = await logoutUser(); 
      if (data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        localStorage.removeItem("loginStatus");
        localStorage.removeItem("userInfo");
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-white w-full flex sm:flex-row flex-col gap-8 justify-between items-center px-24 py-4 '>
      <div className='flex items-center gap-2'>
      <span className='bi bi-alexa text-lg'></span><h2 className='text-2xl'>Post</h2>
      </div>
      <div className='flex items-center justify-around gap-2'>
        <span className='bg-red-400 p-2 text-white rounded-full w-8 h-8 flex justify-center items-center text-lg font-semibold  cursor-pointer' onClick={() => setProfile((prev) => !prev)}>{userData.username[0]}</span>
        {
          profile && (<button onClick={() => navigate('/change-password')} className='absolute top-16 right-32 bg-slate-400 p-4 font-semibold text-red-500 rounded-md'>ChangePassword</button>)
        }
        <button className='border-2 font-semibold border-gray-400 px-2 py-1 rounded-2xl' type='button' onClick={onSubmitLogout}>Logout  <span className="bi bi-arrow-right"></span></button>
      </div>
    </div>
  )
}

export default Header
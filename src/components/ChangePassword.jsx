import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { updateUserPassword } from '../api/UserApi';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const passwordUpdated = await updateUserPassword(form);
      if (passwordUpdated.status > 199 && passwordUpdated.status < 400) {
        console.log(passwordUpdated.data);
        navigate("/");
        setForm({oldPassword: "",newPassword: ""});
      }
    } catch (error) {
      console.error(error);
      console.error(error.message);
    }
  }


  return (
    <div className="border-2 rounded-lg p-4 my-10 w-[350px] bg-gray-600">
  <h2 className="font-bold text-blue-200 text-2xl text-center mb-2 uppercase">Change Password Form</h2>
  <form onSubmit={handleSubmit} className="flex flex-col gap-2">
    <div  className="flex flex-col">
      <label className="text-sm text-white font-semibold" htmlFor="current-password">Current Password</label>
      <input type="password" name="oldPassword" id="current-address" placeholder="Enter Current Password" className="py-2 px-4 rounded outline-none " onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}  />
    </div>
    <div  className="flex flex-col">
      <label className="text-sm text-white font-semibold" htmlFor="new-password">New Password</label>
      <input type="password" name="newPassword" id="new-password" placeholder="Enter New Password" className="py-2 px-4 rounded outline-none " onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}/>
    </div>
    <div className='flex'>
    <button type="submit" className="py-1 px-2 bg-orange-500 w-24 m-auto rounded-md uppercase text-white font-semibold">Submit</button>
    <button type="button" onClick={() => navigate("/")} className="py-1 px-2 bg-red-500 w-24 m-auto rounded-md uppercase text-white font-semibold">Cancel</button>
    </div>
  </form>
</div>
  )
}

export default ChangePassword
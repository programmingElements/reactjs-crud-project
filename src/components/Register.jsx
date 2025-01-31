import React, {useState} from "react";
import { registerUser } from "../api/UserApi";
import { useNavigate } from "react-router";

const Register = () => {

  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    fullname: "",
    password: ""
  });

  const updateInput = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value
    });
  }

  // handle register form

  const onSubmitRegister = async (e) => {
    try {
      e.preventDefault();
      const {data} = await registerUser(registerForm);
      if (data.success) {
        navigate("/signin")
      }
    } catch (error) {
      console.log(error);
    }
  }


  return <div className="border-2 rounded-lg p-4 my-10 w-[350px] bg-gray-600">
    <h2 className="font-bold text-blue-200 text-2xl text-center mb-2 uppercase">Registration Form</h2>
    <form onSubmit={onSubmitRegister} className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label className="text-sm text-white font-semibold" htmlFor="user-name">User Name</label>
        <input type="text" name="username" id="user-name" placeholder="Enter User Name" defaultValue={""}  className="py-2 px-4 rounded outline-none " onChange={updateInput} />
      </div>
      <div  className="flex flex-col">
        <label className="text-sm text-white font-semibold" htmlFor="email-address">Email Address</label>
        <input type="email" name="email" id="email-address" placeholder="Enter Email Address" defaultValue={""} className="py-2 px-4 rounded outline-none " onChange={updateInput} />
      </div>
      <div  className="flex flex-col">
        <label className="text-sm text-white font-semibold" htmlFor="full-name">Full Name</label>
        <input type="text" name="fullname" id="full-name" placeholder="Enter Full Name" defaultValue={""} className="py-2 px-4 rounded outline-none " onChange={updateInput} />
      </div>
      <div  className="flex flex-col">
        <label className="text-sm text-white font-semibold" htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter Password" defaultValue={""} className="py-2 px-4 rounded outline-none " onChange={updateInput} />
      </div>
      <button type="submit" className="py-1 px-2 bg-orange-500 w-24 m-auto rounded-md uppercase text-white font-semibold">Register</button>
    </form>
  </div>
}

export default Register;
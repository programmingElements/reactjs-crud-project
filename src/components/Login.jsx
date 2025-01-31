import React, {useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../api/UserApi";
import  {useNavigate} from "react-router";

const Login = () => {

  const {setIsLoggedIn, setUserData} = useContext(UserContext);
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const updateInput = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    });
  }

  // handle login form

  const  onSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      const {data} = await loginUser(loginForm);
      if(data.success) {
        setIsLoggedIn(true);
        setUserData(data.data);
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  }


  return <div className="border-2 rounded-lg p-4 my-10 w-[350px] bg-gray-600">
  <h2 className="font-bold text-blue-200 text-2xl text-center mb-2 uppercase">Login Form</h2>
  <form onSubmit={onSubmitLogin} className="flex flex-col gap-2">
    <div  className="flex flex-col">
      <label className="text-sm text-white font-semibold" htmlFor="email-address">Email Address</label>
      <input type="email" name="email" id="email-address" placeholder="Enter Email Address" defaultValue={""} className="py-2 px-4 rounded outline-none " onChange={updateInput} />
    </div>
    <div  className="flex flex-col">
      <label className="text-sm text-white font-semibold" htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Enter Password" defaultValue={""} className="py-2 px-4 rounded outline-none " onChange={updateInput} />
    </div>
    <button type="submit" className="py-1 px-2 bg-orange-500 w-24 m-auto rounded-md uppercase text-white font-semibold">Login</button>
  </form>
</div>
}

export default Login;
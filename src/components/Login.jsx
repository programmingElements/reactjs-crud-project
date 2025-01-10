import React, {useState} from "react";

const Login = () => {

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const updateInput = (event) => {
    console.log(loginForm);
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    });
  }

  return <div className="border-2 rounded-lg p-4 my-10 w-[350px] bg-gray-600">
  <h2 className="font-bold text-blue-200 text-2xl text-center mb-2 uppercase">Login Form</h2>
  <form className="flex flex-col gap-2">
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
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Posts from "./components/Posts.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="" element={<Posts />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />        
      </Route>

    </Routes>
  </BrowserRouter>
);

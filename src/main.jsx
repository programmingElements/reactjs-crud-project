import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Posts from "./components/Posts.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProtectedLayout from "./components/ProtectedLayout.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="" element={<Posts />} />
        <Route path="change-password" element={<ProtectedLayout authRequired={true}><ChangePassword/></ProtectedLayout>} />
        <Route path="signin" element={<ProtectedLayout authRequired={false}><Login /></ProtectedLayout>} />
        <Route path="signup" element={<ProtectedLayout authRequired={false}><Register /></ProtectedLayout>} />    

      </Route>
    </Routes>
  </BrowserRouter>
  </UserProvider>
);

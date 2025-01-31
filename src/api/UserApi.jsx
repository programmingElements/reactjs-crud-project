import { api } from "./PostApi";

function registerUser(data) {
  return api.post("/users/signup", data);
}

function loginUser(data) {
  return api.post("/users/login", data);
}

function getUserDetails() {
  return api.get("/users/profile");
}

function updateUserPassword(data) {
  return api.put("/users/change-password", data);
}

function logoutUser() {
  return api.delete("/users/logout");
}

export { 
  registerUser,
  loginUser,
  getUserDetails,
  updateUserPassword,
  logoutUser
}
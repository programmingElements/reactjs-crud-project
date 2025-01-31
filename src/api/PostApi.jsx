import axios from "axios";

axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: "http://localhost:7662/api/v1"
});

// get method
export const getPost = () => {
  return api.get("/posts");
}

// delete method
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
}

// post method
export const postData = (post) => {
  return api.post('/posts', post);
}

// put method
export const updatePost = (id, post) => {
  return api.put(`/posts/${id}`, post);
}
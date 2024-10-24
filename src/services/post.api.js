import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})

// get method - get all posts
export const getPosts = () => {
  return api.get('/posts');
}

// delete method - delete post
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`)
}

// post method  - send post
export const createPost = (post) => {
  return api.post('/posts', post);
}

// update method - edit post
export const editPost = (id, post) => {
  return api.put(`/posts/${id}`, post);
}
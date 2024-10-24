import React, {useEffect, useState} from "react";
import { createPost, editPost } from "../services/post.api";

const Form = ({data, setData, updatePost, setUpdatePost}) => {
  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const isEmpty = Object.keys(updatePost).length === 0;

  useEffect(() => {

    updatePost && setPost({
      title: updatePost.title || "",
      body: updatePost.body || ""
    })

  }, [updatePost])

  const updateInput = (event) => {
    setPost((prevPost) => ({
      ...prevPost, 
      [event.target.name]: event.target.value 
    }))
  }

  const handleEditPost = async () => {
    try {
      const response = await editPost(updatePost.id, post);
      console.log("updated response : ", response);
      if (response.status >= 200 && response.status <= 299) {
        setData((prevData) => {
          return prevData.map((curElem) => curElem._id === response.data._id ? response.data : curElem);
        })

        setPost({ title: "", body: ""});
        setUpdatePost({});
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  const handleAddPost = async () => {
    try {
      const response = await createPost(post);
      console.log(response);
      if (response.status >= 200 && response.status <= 299) {
        setData([{...response.data}, ...data])
      }
      setPost({title: "", body: ""});
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.nativeEvent.submitter.value === "ADD") {
      handleAddPost();
    } else if (event.nativeEvent.submitter.value === "EDIT") {
      handleEditPost();
    }
  }

  return (
    <div className="flex justify-center items-center my-2">
    <form onSubmit={handleSubmit} className="bg-gray-500 rounded-md px-4 py-2 flex flex-col md:flex-row justify-center items-center gap-3">
      <div>
        <input 
        type="text" 
        placeholder="Title" 
        className="px-3 py-2 rounded-md"
        name="title" 
        value={post.title}
        onChange={updateInput}
        />
      </div>
      <div>
        <input 
        type="text" 
        placeholder="News" 
        className="px-3 py-2 rounded-md"
        name="body"
        value={post.body}
        onChange={updateInput}
        />
      </div>
      <div>
        <input type="submit" value={isEmpty ? "ADD" : "EDIT"} className="bg-green-400 px-3 py-2 rounded-md" />
      </div>
    </form>
    </div>
  )
}

export default Form;
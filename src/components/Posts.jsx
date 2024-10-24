import React, { useState, useEffect } from "react";
import { getPosts,deletePost } from "../services/post.api";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updatePost, setUpdatePost] = useState({});

  const handleDelete = async (id) => {
    try {
      const response = await deletePost(id);
      console.log(response);
      if (response.status === 200) {
        setData((prevData) => prevData.filter((curElem) => curElem._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = (curElem) => {
    setUpdatePost(curElem);
  }

  const getAllPosts = async () => {
    try {
      const response = await getPosts();
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPosts();
  }, [])

  return <div id="section-posts" className="w-[90%] my-4">
    <h1 className="text-center text-3xl font-semibold text-green-600">
      Hello Posts Page!
    </h1>
    <Form data={data} setData={setData} updatePost={updatePost} setUpdatePost={setUpdatePost} />
    <ul id="section-post" className="my-2 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {
        data.map((curElem,index) => {
          const {_id, title, body} = curElem;
          return (
          <li key={_id} className="bg-gray-500 rounded-md px-4 py-2">
            <div id="section-content" className="text-white">
              <p><b>{Number(index) + 1}.</b></p>
              <p><b>Title: </b> {title}</p>
              <p><b>News: </b> {body}</p>
            </div>
            <div id="section-btn" className="py-1">
              <button onClick={() => handleUpdate({id:_id, title, body})} className="px-3 py-2 bg-green-400 rounded-md hover:text-white mr-2">EDIT</button>
              <button onClick={() => handleDelete(_id)} className="px-3 py-2 bg-red-400 rounded-md hover:text-white">DELETE</button>
            </div>

          </li>)
        })
      }
    </ul>
  </div>
}

export default Posts;
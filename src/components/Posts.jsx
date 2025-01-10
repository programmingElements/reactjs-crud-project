import { useState, useEffect } from "react";
import { deletePost, getPost } from "../api/PostApi";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData = async () => {
    const {data:response} = await getPost();
    if (response.statusCode == 200) {
      console.log(response);
      setData(response.data);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const {data:response} = await deletePost(id);
      if (response.statusCode === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost._id !== id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post : ", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <section id="section-form" className="my-4">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section id="section-post" className="w-[90%] my-4">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map(({ _id:id, body, title }, idx) => {
            return (
              <li key={id} className="bg-gray-800 py-2 px-4 border-r-4 ">
                <div id="section-content" className="text-sm text-white">
                  <p className="py-2">{idx + 1}.</p>
                  <p className="py-2">
                    <b>Title:</b> {title}
                  </p>
                  <p className="py-2">
                    <b>News:</b> {body}
                  </p>
                </div>
                <div id="section-btn" className="flex gap-2 py-2">
                  <button
                    id="btn-edit"
                    className="bg-green-600 px-2 py-1 rounded hover:text-white"
                    onClick={() => handleUpdatePost({ id, body, title })}
                  >
                    Edit
                  </button>
                  <button
                    id="btn-delete"
                    className="bg-red-600 px-2 py-1 rounded hover:text-white"
                    onClick={() => handleDeletePost(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Posts;
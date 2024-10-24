import { useEffect, useState } from "react";
import { postData, updatePost } from "../api/PostApi";

const Form = ({data, setData, updateDataApi, setUpdateDataApi}) => {
  const [addData, setAddData] = useState({
    title: "",
    body: ""
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    updateDataApi && setAddData({
      title: updateDataApi.title || "",
      body: updateDataApi.body || ""
    })
  }, [updateDataApi])

  const updateInput = (e) => {
    setAddData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  const addPostData = async () => {
    const response = await postData(addData);
    console.log("Response", response);
    if (response.status >= 200 && response.status <= 299) {
      setData([...data, response.data ]);
      setAddData({title: "", body: ""});
    }
  }

  const updatePostData = async () => {
    try {
      const response = await updatePost(updateDataApi.id, addData);
      console.log("Response", response);
      if (response.status >= 200 && response.status <= 299) {
        setData((prevData) => prevData.map((curElem) => curElem.id === response.data.id ? response.data : curElem));   
        setAddData({title: "", body: ""});
        setUpdateDataApi({});
      }
    } catch (error) {
     console.log(error); 
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  }

  return <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row gap-2 bg-gray-600 px-4 py-2 rounded-md">
    <div>
      <label htmlFor="title"></label>
      <input 
       type="text" 
       autoComplete="off"
       id="title"
       name="title"
       placeholder="Add Title"
       value={addData.title}
       onChange={updateInput}
       className="px-2 py-1 rounded"
      />
    </div>
    <div>
      <label htmlFor="body"></label>
      <input 
       type="text" 
       autoComplete="off"
       id="body"
       name="body"
       placeholder="Add Post"
       value={addData.body}
       onChange={updateInput}
       className="px-2 py-1 rounded"
      />
    </div>
    <button type="submit" className="px-3 py-1 bg-green-600 rounded-md hover:text-white" value={isEmpty ? "Add" : "Edit"}>{isEmpty ?"ADD" : "EDIT"}</button>
  </form>
}

export default Form;
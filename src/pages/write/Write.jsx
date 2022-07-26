import Topbar from "../../components/topbar/Topbar";
import "./Write.css";
import writeImage from "../../resources/images/5G Global Technology.png"

import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {


  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return <div className="write">
      <Topbar/>
      <img
      className="writeImage" 
      src={writeImage} 
      alt="" />
      <form className="writeForm">
          <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <i title="Click to add a cover photo to your blog" className="writeIcon fas fa-plus"></i>
              </label>
              <input type="file" id="fileInput" name="fileInput" className="fileInput"/>
              <input type="text" placeholder="Title" className="witeInput writeTitle" autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
              <textarea className="witeInput writeDescription" placeholder="Share your thoughts to the world..."></textarea>
          </div>
          <button className="writeSubmit" type="submit">Publish</button>
      </form>
  </div>;
}

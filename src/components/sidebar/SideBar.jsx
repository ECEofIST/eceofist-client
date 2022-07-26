import "./SideBar.css";
import profilePicture from "../../resources/images/profile.png"
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";



export default function SideBar() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    };
    getCats();
  }, [])


  return <div className="sideBar">
    <div className="sideBarItem">
      <span className="sideBarTitle"> ABOUT ME </span>
      <img className="sideBarImag"
        //   src="https://maaazhar.github.io/images/profile-1.png" 
        src={profilePicture}
        alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente incidunt eius odit. Nostrum.</p>
    </div>
    <div className="sideBarItem">
      <span className="sideBarTitle">CATEGORIES</span>
      <ul className="sideBarList">
        <li className="sideBarListItem">
          {cats.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`}>
              {c.name}
            </Link>
          ))}
        </li>

      </ul>
    </div>
    <div className="sideBarItem">
      <span className="sideBarTitle">FOLLOW US</span>
      <div className="sideBarSocialContainer">
        <i className="sideBarSocialIcon fab fa-facebook-square"></i>
        <i className="sideBarSocialIcon fab fa-twitter-square"></i>
        <i className="sideBarSocialIcon fab fa-youtube-square"></i>
      </div>
    </div>

  </div>;
}

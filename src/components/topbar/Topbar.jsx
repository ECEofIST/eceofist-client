import "./Topbar.css"
import profilePicture from "../../resources/images/profile.png"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Topbar() {
  // const user = true;

  const { user, dispatch } = useContext(Context);
  // const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return <div className="top">
    <div className="topLeft">
      <i className="topIcon fab fa-facebook-square"></i>
      <i className="topIcon fab fa-twitter-square"></i>
      <i className="topIcon fab fa-youtube-square"></i>
      {/* <i className="topIcon fab fa-blogger"></i> */}
    </div>
    <div className="topCenter">
      <ul className="topList">
        <Link className="link" to="/blogs"><li className="topListItem">HOME</li></Link>
        {/* <Link className="link" to="/about"><li className="topListItem">ABOUT</li></Link> */}
        {/* <Link className="link" to="/about"><li className="topListItem">CONTACT</li></Link> */}
        <Link className="link" to="/writePost"><li className="topListItem">WRITE</li></Link>
        <Link className="link" to="/"><li className="topListItem">{user && "LOGOUT"}</li></Link>
        <Link className="link" to="/login"><li className="topListItem">{!user && "LOGIN"}</li></Link>
      </ul>
    </div>
    <div className="topRight">
      <Link className="link" to="/settings">
        {
          user ? (
            <img
              className="topImage"
              // src="https://maaazhar.github.io/images/profile-1.png" 
              // src={profilePicture}
              src={user.profilePic}
              alt="" />
          )
            : (
              <ul className="topList">
                <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
              </ul>
            )

        }
      </Link>

      <i className="topSearchIcon fas fa-search"></i>
    </div>
  </div>;
}

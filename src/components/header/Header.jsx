import "./Header.css";
import homeImage from "../../resources/images/robot-hand-with-human-hand.webp"

export default function Header() {
  return <div className="header">
      <div className="headerTitles">
          <span className="headerTitleSm">ECE</span>
          <span className="headerTitleLg">Blog Site</span>
      </div>
      <img className="headerImage" 
      // src="https://img.freepik.com/free-photo/robot-hand-making-contact-with-human-hand-dark-background_117023-861.jpg?size=626&ext=jpg" 
      src={homeImage} 
      alt="" className="headerImage" />

  </div>;
}

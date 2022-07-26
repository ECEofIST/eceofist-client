import "./NavBar.css"
import eceLogo1 from "../../resources/images/ECE Logo Tr.png"
import eceLogo2 from "../../resources/images/ECE Logo WT Tr.png"
import { Link } from "react-router-dom";

export default function NavBar() {
    const user = true;
    return <div className="navBartop">
        <div className="navBartopLeft">
            <div className="navBartopLeftImg">
                <Link className="link" to="/">
                    <div className="navBartopLeftImgBx"></div>
                    {/* <img className="navBartopLogo" 
                    src={require( "../../resources/images/ECE Logo Tr.png" )}
                    alt="" /> */}
                </Link>
            </div>
            <div className="siteHeading">
                <h3>Department of Electronics and Communication Engineering</h3>
                <h4>Institute of Science and Technology</h4>
            </div>
        </div>
        <div className="navBartopRight">

            <ul className="navBartopList">
                <Link className="link" to="/"><li className="navBartopListItem">HOME</li></Link>
                <Link className="link" to="/notices"><li className="navBartopListItem">Notices</li></Link>
                <Link className="link" to="/admission"><li className="navBartopListItem">Admission</li></Link>
                <Link className="link" to="/academics"><li className="navBartopListItem">Academics</li></Link>
                <Link className="link" to="/blogs"><li className="navBartopListItem">Blogs</li></Link>
                <Link className="link" to="/achievements"><li className="navBartopListItem">Achievements</li></Link>
                <Link className="link" to="/about"><li className="navBartopListItem">ABOUT</li></Link>
            </ul>
            

            <i className="navBartopSearchIcon fas fa-search"></i>
        </div>

    </div>;
}

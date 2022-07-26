import React from 'react'
import "./TopNavBar.css"
import eceLogo1 from "../../resources/images/ECE Logo Tr.png"
import eceLogo2 from "../../resources/images/ECE Logo WT Tr.png"
import { Link } from "react-router-dom";

export default function TopNavBar() {
    return <div className="topNavBar">
        <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
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

            <div className="collapse navbar-collapse navBartopRight" id="navbarSupportedContent">
                <ul className="navbar-nav ml-lg-auto navBartopList">
                    <li className="nav-item menuTitle active ">
                        <Link className="nav-link link" to="/"><li className="navBartopListItem">HOME</li><span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item menuTitle active ">
                        <Link className="nav-link link" to="/blogs"><li className="navBartopListItem">Blog</li></Link>
                    </li>

                    <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> Notices <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link to="/admissionNotice" onClick={() => window.location.replace("/admissionNotice")} className="link dropdown-item dropDownMenuItem" ><li className="">Admission Notices</li></Link>
                            <Link to="/ISTNotice" onClick={() => window.location.replace("/ISTNotice")} className="link dropdown-item dropDownMenuItem" ><li className="">IST Notices</li></Link>
                            <Link to="/NUnotices" onClick={() => window.location.replace("/NUnotices")} className="link dropdown-item dropDownMenuItem" ><li className="">NU Notices</li></Link>
                        </div>
                    </li>

                    <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> Admission <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link className="link dropdown-item dropDownMenuItem" to="/admissionEligibility"><li className="">Admission Eligibility</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/admissionProcedure"><li className="">Admission Procedure</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/tuitionFees"><li className="">Tuition Fees Structure</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/scholarshipAssistantship"><li className="">Scholarship / Assistantship</li></Link>

                        </div>
                    </li>

                    <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> Academics <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link className="link dropdown-item dropDownMenuItem" to="/administration"><li className="">Administration</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/facultyMember"><li className="">Faculty Member</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/courseOutline"><li className="">Course Outline</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/NUexamFormFillup"><li className="">Exam Form Fillup (NU)</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/NUresult"><li className="">Result (NU)</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/electricalAndElectronicsLab"><li className="">Electrical And Electronics Lab</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/communicationLab"><li className="">Communication Lab</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/computerLab"><li className="">Computer Lab</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/library"><li className="">Library</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/ISTjournal"><li className="">IST Journal</li></Link>
                        </div>
                    </li>

                    <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> Achievements <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link className="link dropdown-item dropDownMenuItem" to="/winningPrizes"><li className="">Winning Prizes</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/photoGallery"><li className="">Photo Gallery</li></Link>
                        </div>
                    </li>

                    <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> About <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link className="link dropdown-item dropDownMenuItem" to="/aboutIST"><li className="">IST</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/aboutECE"><li className="">ECE</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/aboutThisWebsite"><li className="">This Website</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/contact"><li className="">Contact</li></Link>
                        </div>
                    </li>

                </ul>
                <i className="navBartopSearchIcon fas fa-search"></i>

            </div>

        </div>
    </div>
}


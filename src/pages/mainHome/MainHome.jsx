import React from 'react'
import "./MainHome.css"
import { Link } from "react-router-dom";
import ImgCarousel from '../../components/imgCarousel/ImgCarousel'
import BlogImage from '../../resources/images/5G Global Technology.png'

export default function MainHome() {
    return <div className="mainHome">
        <div className="latestNoticeBoard">
            <marquee behavior="" direction="left">The latest notice of the institute will be shown here all the time to grab the attention of the web surfer</marquee>
            <div className="allNoticeButton" ><a href="/ISTNotice">All IST Notices</a></div>
        </div>
        <div className="mainHomeUpperPart ">
            <div className="upperPartLeft ">
                <ImgCarousel />
                <div className="departmentHead">
                    <div className="departmentHeadTitle">
                        <div className="departmentHeadImg">
                            <img src="https://ist.edu.bd/wp-content/uploads/2021/10/Mohammad-Liton-Hossain-1.jpg" alt="" />
                        </div>
                        <div className="departmentHeadDesig">
                            <h3>Mohammad Liton Hossain</h3>
                            <h4>Assistant Professor and Head of the Department</h4>
                            <h5>Department of Electronics and Communication Engineering.</h5>
                        </div>
                    </div>
                    <div className="departmentHeadMsg">
                        <p>
                            Welcome to the Department of Electronics and Communication Engineering at Institute of Science and Technology. Starting the journey in 2005, the Department of Electronics and Communication Engineering is celebrating its 17th anniversary this year. The mission of the department is to make and keep up a domain for Excellence in Learning and Applied Research in the area of Electronics, Robotics, Networking and Communication Engineering. We constantly strive to provide an excellent academic and research atmosphere for the students and faculty members to inherit a professional efficiency along with moral dignity and values.
                        </p>
                    </div>
                </div>
            </div>
            <div className="upperPartRight ">
                <div className="homeBlogSection">
                    <h3>Recent Blogs</h3>
                    <hr />
                    <Link to="/post/:postId" className="link">
                        <div className="blogItemOnHome">
                            <div className="blogItemImg">
                                <img src={BlogImage} alt="" />
                            </div>
                            <div className="blogItemTxt">
                                <h5>How 5G Effects on Data Security</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus quos rerum quod totam dolor porro eius asperiores at itaque asperiores is.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/post/:postId" className="link">
                        <div className="blogItemOnHome">
                            <div className="blogItemImg">
                                <img src={BlogImage} alt="" />
                            </div>
                            <div className="blogItemTxt">
                                <h5>How 5G Effects on Data Security</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus quos rerum quod totam dolor porro eius asperiores at itaque asperiores is.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/post/:postId" className="link">
                        <div className="blogItemOnHome">
                            <div className="blogItemImg">
                                <img src={BlogImage} alt="" />
                            </div>
                            <div className="blogItemTxt">
                                <h5>How 5G Effects on Data Security</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus quos rerum quod totam dolor porro eius asperiores at itaque asperiores is.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/post/:postId" className="link">
                        <div className="blogItemOnHome">
                            <div className="blogItemImg">
                                <img src={BlogImage} alt="" />
                            </div>
                            <div className="blogItemTxt">
                                <h5>How 5G Effects on Data Security</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus quos rerum quod totam dolor porro eius asperiores at itaque asperiores is.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/post/:postId" className="link">
                        <div className="blogItemOnHome">
                            <div className="blogItemImg">
                                <img src={BlogImage} alt="" />
                            </div>
                            <div className="blogItemTxt">
                                <h5>How 5G Effects on Data Security</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus quos rerum quod totam dolor porro eius asperiores at itaque asperiores is.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/post/:postId" className="link">
                        <div className="blogItemOnHome">
                            <div className="blogItemImg">
                                <img src={BlogImage} alt="" />
                            </div>
                            <div className="blogItemTxt">
                                <h5>How 5G Effects on Data Security</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus quos rerum quod totam dolor porro eius asperiores at itaque asperiores is.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="mainHomeLowerPart">
            <div className="mainHomeSourceContainer">
                <div className="mainHomeSource">
                    <iframe scrolling='no' src="https://ist.edu.bd/department-of-electronics-and-communication-engineering/" width="100%" height="533" frameborder="0"></iframe>
                </div>
            </div>
            {/* <h4>ECE in Institue of Science and Technology</h4>
            <hr />
            <p>
                Department of Electronics and Communication Engineering (ECE) at Institute of Science and Technology (IST) provides B.Sc. (Honors) in Electronics and Communication Engineering (ECE) undergraduate course.
                B.Sc. (Honors) in Electronics and Communication Technology was first introduced by National University of Bangladesh at the year 2005. Later, in 2007 it was converted to B.Sc. (Honors) in Electronics and Communication Engineering (ECE) by National University of Bangladesh.
            </p>
            <p>
                ECE is one of the most popular Engineering subjects worldwide, ECE has played a major role behind many recent revolutionary discoveries, such as applied fields of electronics, robotics, automation, satellite engineering, digital communication and mobile communication, which has created an amazing career opportunities for ECE Graduates. ECE graduates can pursue a well-paid and respected career in electronics, robotics, telecommunication engineering, radio and satellite communication, several other applied fields of computer science and Information Technology.
            </p>
            <p>
                The vision of this department is to produce professionally as well as globally competent graduates in the field of electrical and electronic engineering and serve society by addressing the challenges for sustainable development. Its mission is to create a conducive academic environment achieving the highest quality of education and cutting-edge research. Moreover, to enhance student’s good communication and leadership skills and their ability to use their engineering knowledge in a rapidly changing world by providing state-of-the-art resources. Lastly, to produce socially responsible and morally upright graduates.
                Only 75 students can study this subject every year. So far 10 batches has successfully passed out and all the time IST ECE students secured the first position in National University of Bangladesh.
            </p>
            <p>
                Electronics and Communication Engineering deals with the electronic devices, circuits, communication equipment’s like transmitter, receiver, integrated circuits (IC). It also deals with basic electronics, analog and digital transmission and reception of data, voice and video (Example AM, FM, DTH), microprocessors, satellite communication, microwave engineering, antenna and wave progression. It also has a great influence in the fields of robotics, biomedical engineering and nanotechnology.
            </p>
            <p>
                Electronics and Communication Engineering opens up great career prospects for the students. The students after completion of the degree can easily avail job opportunities in manufacturing industries and service organizations such as broadcasting, consulting, data communication, entertainment, research and development; and system support. The candidates can also work in modern multimedia service firms that are involved in real-time transfer of information through video conferencing and internet broadcasting.
            </p> */}
        </div>
    </div>
}

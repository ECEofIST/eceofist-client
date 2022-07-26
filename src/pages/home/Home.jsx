import axios from "axios"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/header/Header";
import Posts from "../posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./Home.css";

export default function Home() {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return <>
    <Topbar />
    <Header />
    <div className="home">
      <Posts posts={posts} />
      <SideBar />
    </div>;
  </>
}

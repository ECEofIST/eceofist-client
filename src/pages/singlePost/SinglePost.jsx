import SideBar from "../../components/sidebar/SideBar";
import SinglePostContent from "../../components/singlePostContent/SinglePostContent";
import "./SinglePost.css";

export default function SinglePost() {
  return <div className="singlePost">
      <SinglePostContent/>
      <SideBar/>
  </div>;
}

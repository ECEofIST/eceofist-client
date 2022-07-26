import SideBar from "../../components/sidebar/SideBar";
import "./Settings.css";
import SettingsPP from "../../resources/images/profile.png"
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Settings() {

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };




    return <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                <div className="settingsArea">
                    <div className="settingsPP">

                        <label>Profile Picture</label>
                        {/* <img src={SettingsPP} alt="" /> */}
                        <img
                            src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i title="Click to change your profile picture" className="settingsPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" name="fileInput" className="fileInput" />
                    </div>
                    <div className="settingsInfo">

                        <label>Username</label>
                        <input
                            type="text"
                            placeholder={user.username}
                            onChange={(e) => setUsername(e.target.value)}
                            name="name" />

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder={user.email}
                            onChange={(e) => setEmail(e.target.value)} name="email" />

                        <label>Password</label>
                        <input t
                            ype="password"
                            onChange={(e) => setPassword(e.target.value)}
                            name="password" />
                    </div>
                </div>
                <button className="settingsSubmitButton" type="submit">
                    Update
                </button>
                {success && (
                    <span
                        style={{ color: "green", textAlign: "center", marginTop: "20px" }}
                    >
                        Profile has been updated...
                    </span>
                )}

            </form>
        </div>
        <SideBar />
    </div>;
}

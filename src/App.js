import Topbar from "./components/topbar/Topbar";
import NavBar from  "./components/navBar/NavBar"
import TopNavBar from "./components/topTst/TopNavBar";

import MainHome from "./pages/mainHome/MainHome"

import NUnotices from "./pages/notices/NUnotice/NUnotices"
import AdmissionNotice from "./pages/notices/admissionNotice/AdmissionNotice"
import ISTNotice from "./pages/notices/ISTnotice/ISTnotice"

import AdmissionEligibility from "./pages/admission/admissionEligibility/AdmissionEligibility";
import TuitionFees from "./pages/admission/tuitionFees/TuitionFees";
import AdmissionProcedure from "./pages/admission/admissionProcedure/AdmissionProcedure";
import ScholarshipAssistantship from "./pages/admission/scholarshipAssistantship/ScholarshipAssistantship";

import Administration from "./pages/academics/administration/Administration";
import CommunicationLab from "./pages/academics/communicationLab/CommunicationLab";
import ComputerLab from "./pages/academics/computerLab/ComputerLab";
import CourseOutline from "./pages/academics/courseOutline/CourseOutline";
import ElectricalAndElectronicsLab from "./pages/academics/electricalAndElectronicsLab/ElectricalAndElectronicsLab";
import ExamFormFillup from "./pages/academics/examFormFillup/ExamFormFillup";
import FacultyMember from "./pages/academics/faculty/FacultyMember";
import Library from "./pages/academics/library/Library";
import Result from "./pages/academics/result/Result";
import ISTjournal from "./pages/academics/ISTjournal/ISTjournal";

import WinningPrizes from "./pages/achievements/winningPrizes/WinningPrizes";
import PhotoGallery from "./pages/achievements/photoGallery/PhotoGallery";

import AboutIST from "./pages/about/aboutIST/AboutIST";
import AboutECE from "./pages/about/aboutECE/AboutECE";
import AboutThisWebsite from "./pages/about/aboutThisWebsite/AboutThisWebsite";

import Contact from "./pages/about/contact/Contact";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import SinglePost from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";

import Footer from "./pages/footer/Footer";

import { Context } from "./context/Context";
import { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  // const user = true;
  const { user } = useContext(Context)
  return (
    <Router>
      {/* <Topbar /> */}
      <TopNavBar/>
      {/* <NavBar/> */}
      <Switch>
        <Route exact path="/"> <MainHome/> </Route>

        <Route path="/admissionNotice"> <AdmissionNotice/> </Route>
        <Route path="/istNotice"> <ISTNotice/> </Route>
        <Route path="/nuNotices"> <NUnotices/> </Route>
        
        <Route path="/admissionEligibility"> <AdmissionEligibility/> </Route>
        <Route path="/tuitionFees"> <TuitionFees/> </Route>
        <Route path="/admissionProcedure"> <AdmissionProcedure/> </Route>
        <Route path="/scholarshipAssistantship"> <ScholarshipAssistantship/> </Route>
        
        <Route path="/administration"> <Administration/> </Route>
        <Route path="/facultyMember"> <FacultyMember/> </Route>
        <Route path="/courseOutline"> <CourseOutline/> </Route>
        <Route path="/NUexamFormFillup"> <ExamFormFillup/> </Route>
        <Route path="/NUresult"> <Result/> </Route>
        <Route path="/electricalAndElectronicsLab"> <ElectricalAndElectronicsLab/> </Route>
        <Route path="/communicationLab"> <CommunicationLab/> </Route>
        <Route path="/computerLab"> <ComputerLab/> </Route>
        <Route path="/library"> <Library/> </Route>
        <Route path="/ISTjournal"> <ISTjournal/> </Route>

        <Route path="/blogs"> <Home/> </Route>

        <Route path="/winningPrizes"> <WinningPrizes/> </Route>
        <Route path="/photoGallery"> <PhotoGallery/> </Route>
        
        <Route path="/aboutIST"> <AboutIST/> </Route>
        <Route path="/aboutECE"> <AboutECE/> </Route>
        <Route path="/aboutThisWebsite"> <AboutThisWebsite/> </Route>
        <Route path="/contact"> <Contact/> </Route>

        <Route path="/post/:postId"> <SinglePost/> </Route>
        <Route path="/login"> {user? <Home/> : <Login/>} </Route>
        <Route path="/register"> {user? <Home/> : <Register/>} </Route>
        <Route path="/writePost"> {user? <Write/> : <Login/>} </Route>
        <Route path="/settings"> {user? <Settings/> : <Login/>} </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

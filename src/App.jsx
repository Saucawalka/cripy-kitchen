import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layouts from "./components/Layout/Layouts";
import Home from "./components/home/Home";
import Story from "./components/story/Story";
import Menu from "./components/menu/Menu";
import Update from "./components/update/Update";
import Contact from "./components/cont/Contact";
import Notfound from "./components/notfound/Notfound";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Food from "./components/foodupload/Food";
import Profile from "./components/proflie/Profile";
import Landing from "./components/Landing page/Landing";
import Userlayout from "./components/userlayout/Userlayout";
import Detailednew from "./components/detaillednews/Detailednew";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      
      {token ? (
        <Route path="/" element={<Layouts />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Story />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/updates" element={<Update />} />
          <Route path="/reachus" element={<Contact />} />
          <Route path="/food" element={<Food />} />
          <Route path="/userProfile" element={<Profile />} />
          <Route path="/news" element={<Detailednew />} />
          
          
        </Route>
      ) : (
        <Route path="/" element={<Userlayout />}>
          <Route index element={<Navigate to="/landingpage" />} />
          <Route path="/landingpage" element={<Landing />} />
         
        </Route>
      )}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;

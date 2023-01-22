import Header from "./component/header";
import Banner from "./component/banner";
import Trending from "./component/trending";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./component/News";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./pages/admin";
import { Dashboard } from "./pages/dashboard";
import { User } from "./pages/adminUser";
import { NewsAdmin } from "./pages/adminnews";
import { UserInterface } from "./pages/user";
import 'bootstrap-icons/font/bootstrap-icons.css';
const Main1Items = [
  {
    id: "01",
    img: require("./image/1_CJe3891yB1A1mzMdqemkdg.jpeg.svg").default,
    text1: "Barack Obama",
    text2: "My 2022 End of Year Lists",
    text3: "We know more now than before, and it’s still alarming",
    date: "Dec 23, 2022",
    read: "3 min read",
    icon: "",
    img1: require("./image/1.jpeg"),
    cat: "programming",
  },
  {
    id: "02",
    img: require("./image/1_DyMHJ7-6eRZHHUSRHsbg7g.png.svg").default,
    text1: "Natasha Selvaraj in Towards Data Science",
    text2: "How to Make Money While Learning Data Science in 2023",
    text3:
      "This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity amongst the…",
    date: "Dec 28, 2022",
    read: "7 min read",
    icon: require("./image/star.png"),
    img1: require("./image/2.jfif"),
    cat: "data science",
  },
  {
    id: "03",
    img: require("./image/1_irJIS1uuGre5eOdplAA1eA.png.svg").default,
    text1: "Maria Milojkovic, MA in Lessons from History",
    text2: "He Used AI to See Today's Looks of The Famous People From the Past",
    text3:
      "After dropping the kids off, I came home and stopped in the kitchen to take in the aftermath of our chaotic morning together. And it got me…",
    date: "Dec 28, 2022",
    read: "10 min read",
    icon: require("./image/star.png"),
    img1: require("./image/3.jpeg"),
    cat: "technology",
  },
  {
    id: "04",
    img: require("./image/div (1).svg").default,
    text1: "Yang Zhou in TechToFreedom",
    text2: "9 Python Built-In Decorators That Optimize Your Code Significantly",
    text3:
      "What is it, how you can start, and why it will make your product team much better builders and collaborators.",
    date: "Jan 1, 2022",
    read: "7 min read",
    icon: require("./image/star.png"),
    img1: require("./image/4.jfif"),
    cat: "writing",
  },
  {
    id: "05",
    img: require("./image/div (2).svg").default,
    text1: "Hanif Abdurraqib",
    text2: "100 Favorite Albums of 2022",
    text3:
      "Why the mass sharing of the music streaming service’s year-end lists is uniquely telling",
    date: "Dec 30, 2022",
    read: "9 min read",
    icon: "",
    img1: require("./image/5.png"),
    cat: "politics",
  },
  {
    id: "06",
    img: require("./image/div.svg").default,
    text1: "Christopher Clemmons in Level Up Coding",
    text2: "Structure Your React Project Like a Senior Developer",
    text3: "We know more now than before, and it’s still alarming",
    date: "Dec 31, 2022",
    read: "3 min read",
    icon: "",
    img1: require("./image/6.jpeg"),
    cat: "machine learning",
  },
];

function App() {
  const [color, setColor] = useState("#FFC107");
  const [color1, setColor1] = useState("black");
  const [modal, setModal] = useState(false);
  const handleShow = () => {
    setModal = !modal;
  };
  const handleScroll = (event) => {
    if (event.currentTarget.scrollTop > 475) {
      setColor("white");
      setColor1("green");
    } else {
      setColor("#FFC107");
      setColor1("black");
    }
  };
  const scrolStyle = {
    position: "fixed",
    height: "75px",
    top: "0",
    zIndex: "1",
    borderBottom: "1px black solid",
    backgroundColor: color,
  };
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div
              style={{ width: "100vw", height: "100vh", overflow: "scroll" }}
              onScroll={handleScroll}
            >
              <Header style={scrolStyle} color1={color1} show={handleShow} />
              <Banner color1={color1} />
              <Trending trendingAar={Main1Items} />
              <News/>
            </div>
          }
        />
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="news" element={<NewsAdmin/>}/>
          <Route path="user" element={<User/>}/>
        </Route>
        <Route path="/user" element={<UserInterface />}>
          {/* <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="news" element={<NewsAdmin/>}/>
          <Route path="user" element={<User/>}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

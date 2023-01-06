import Header from './component/header';
import Banner from './component/banner';
import Trending from './component/trending';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
let nav = [ 
  "Our Story",
  "Membership",
  "Write",
  "Sign in",]
  const main1Items= [
    {
      id:"01",
      img:require("./image/1_CJe3891yB1A1mzMdqemkdg.jpeg.svg"),
      text1:"Barack Obama",
      text2:"My 2022 End of Year Lists",
      date: "Dec 23, 2022",
      read:"3 min read"
    },
    {
      id:"02",
      img:require("./image/1_DyMHJ7-6eRZHHUSRHsbg7g.png.svg"),
      text1:"Natasha Selvaraj in Towards Data Science",
      text2:"How to Make Money While Learning Data Science in 2023",
      date: "Dec 28, 2022",
      read:"7 min read",
      icon:require("./image/star.png")
    },
    {
      id:'03',
      img:require("./image/1_irJIS1uuGre5eOdplAA1eA.png.svg"),
      text1:"Maria Milojkovic, MA in Lessons from History",
      text2:"He Used AI to See Today's Looks of The Famous People From the Past",
      date: "Dec 28, 2022",
      read:"10 min read",
      icon:require("./image/star.png")
    },
    {
      id:'04',
      img:require("./image/div (1).svg"),
      text1:"Yang Zhou in TechToFreedom",
      text2:"9 Python Built-In Decorators That Optimize Your Code Significantly",
      date: "Jan 1, 2022",
      read:"7 min read",
      con:require("./image/star.png")
    },
    {
      id:'05',
      img:require("./image/div (2).svg"),
      text1:"Hanif Abdurraqib",
      text2:"100 Favorite Albums of 2022",
      date: "Dec 30, 2022",
      read:"9 min read"
    },
    {
      id:'06',
      img:require("./image/div.svg"),
      text1:"Christopher Clemmons in Level Up Coding",
      text2:"Structure Your React Project Like a Senior Developer",
      date: "Dec 31, 2022",
      read:"3 min read"
    },
  ]
function App() {
  return (
    <div className="App">
      <Header nav={nav}/>
      <Banner/>
      <Trending trendingAar={main1Items}/>
    </div>

  );
}

export default App;

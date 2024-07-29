
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Community from "./components/Community/Community";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <div className="">
      <Header />
     <div className="">
       <Home />
       <Community />
       <Body />
     </div>
    </div>
  )
}

export default App
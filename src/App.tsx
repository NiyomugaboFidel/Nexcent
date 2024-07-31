import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";
import Achievements from "./components/Body/Achievements";
import Unlock from "./components/Body/Unlock";
import Customers from "./components/Body/Customers";
import CommunityUp from "./components/Body/CommunityUp";
import Calender from './components/Body/Calender'
const App = () => {
  return (
    <div className="">
      <Header />
     <div className="">
       <Home />
       <Community />
       <Unlock />
       <Achievements />
       <Calender />
        <Customers />
        <CommunityUp />
       <Footer />
     </div>
    </div>
  )
}

export default App
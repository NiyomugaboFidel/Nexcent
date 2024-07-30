import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Community from "./components/Community/Community";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="">
      <Header />
     <div className="">
       <Home />
       <Community />
       <Body />
       <Footer />
     </div>
    </div>
  )
}

export default App
import { useContext } from "react";
import "./App.css";
import Contact from "./component/contact/Contact";
import Experience from "./component/Experience/Experience";
import Footer from "./component/Footer/Footer";
import Intro from "./component/intro/Intro";
import Navbar from "./component/Navbar/Navbar";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/Services/Services";
import Testimonilal from "./component/Testimonial/Testimonial";
import Work from "./component/Work/Work";
import {theme} from "./Context"

function App() {
  const themecontext=useContext(theme);
  const darkMode = themecontext.state.darkMode;
  return ( 
    <div className="App" style={{"background":darkMode?"black":"",color:darkMode?"white":""}}>

      <Navbar />
      <Intro/>
      <Services/>
      <Experience />
      <Work />
      <Portfolio/>
      <Testimonilal/>
      <Contact/>
      <Footer/>
    </div>
    );
}

export default App;

import Footer from "./components/footer/Footer";
import About from "./components/introduction/about/About";
import Contact from "./components/introduction/contact/Contact";
import Intro from "./components/introduction/Intro";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
<Navbar/>
<Intro/>
<About/>
<Contact/>
<Footer/>
  </div>;
};

export default App;
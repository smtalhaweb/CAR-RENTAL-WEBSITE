import Navbar from "@/scenes/navbar";
import { useEffect, useState } from 'react';
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import Car from "@/scenes/cars";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import Services from "@/scenes/services";
import Testimonial from "./scenes/testimonial/Testimonial";
import AnchorLink from "react-anchor-link-smooth-scroll"
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Car setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Testimonial setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.Home)}
        href={`#${SelectedPage.Home}`}
      >
        <button className="bg-blue-400 hover:bg-red-800 transition duration-700 w-full ease-in-out hover:text-white">
          Go Back To HomePage  
        </button>
      </AnchorLink>
      <Footer />
    </div>
  )
}

export default App;

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Img from "@/assets/Img.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({isTopOfPage,selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex md:justify-center md:items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-blue-400 drop-shadow";
  return (
        <nav>
          <div className={`${navbarBackground} ${flexBetween} top-0 fixed z-30 w-full py-2`}>
              <div className={`${flexBetween} mx-auto w-5/6`}>
                  <div className={`${flexBetween} w-full gap-16`}>
                      <img src={Img} alt="RentCar-Logo" width={100} height={100} />
                     
                      {/* right side */}
                      {isAboveMediumScreens ? (
                          <div className={`${flexBetween} w-full`}>
                              <div className={`${flexBetween} gap-20 text-sm`}>
                                  <Link
                                      page="Home"
                                      selectedPage={selectedPage}
                                      setSelectedPage={setSelectedPage}
                                  />
                                  <Link page="Cars"
                                      selectedPage={selectedPage}
                                      setSelectedPage={setSelectedPage}
                                  />
                                  <Link page="Services"
                                      selectedPage={selectedPage}
                                      setSelectedPage={setSelectedPage}
                                  />
                                  <Link page="Testimonial"
                                      selectedPage={selectedPage}
                                      setSelectedPage={setSelectedPage}
                                  />
                                  <Link page="Contact Us"
                                      selectedPage={selectedPage}
                                      setSelectedPage={setSelectedPage} />  
                              </div>
                          </div>
                      ) : (
                          <button
                              className="rounded-full bg-secondary-500 p-2"
                              onClick={() => setIsMenuToggled(!isMenuToggled)}
                              >
                                <Bars3Icon className="h-8 w-8 text-white" />
                          </button>
                      )}   
                  </div>
              </div>
          </div>
          {/* MOBILE MENU DEVICE MODEL */}
          {!isAboveMediumScreens && isMenuToggled && (
              <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-300 drop-shadow-xl">
                  {/* CLOSE ICON */}
                  <div className="flex justify-end p-12">
                      <button
                          onClick={() => setIsMenuToggled(!isMenuToggled)}>
                          <XMarkIcon className="h-6 w-6 text-gray-400" />
                      </button>
                  </div>
                  {/* MENU ITEMS */}
                  <div className="ml-[33%] flex flex-col text-xl gap-10">
                     <Link
                         page="Home"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}
                     />
                     <Link
                         page="Cars"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}
                      />
                      <Link
                        page="Services"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <Link
                          page="Testimonial"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                     />
                      <Link
                          page="Contact Us"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                     />
                  </div>
              </div>
          )}
        </nav>
  )
}

export default Navbar;
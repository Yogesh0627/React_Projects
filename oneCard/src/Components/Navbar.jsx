import { useState } from "react";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { handleApply } from "./Navigation ";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { to: "/", title: "Home" },
    { to: "/about", title: "About Us" },
    { to: "/careers", title: "Careers" },
    { to: "/offers", title: "Offers" },
    { to: "/blog", title: "Blog" },
    { to: "/faq", title: "FAQ" },
    { to: "/contact", title: "Contact Us" },

  ];

  const allLinks = links.map((link) => (
    <NavLink
      className="font-extrabold text-base font-serif text-gray-800 hover:text-blue-600 block py-2 px-4 transition duration-300"
      key={link.to}
      to={link.to}
      onClick={toggleMenu}
    >
      {link.title}
    </NavLink>
  ));
  const navigate = useNavigate();

  if (path.pathname == '/apply'){
    return
  }

  return (
    <nav className="bg-white w-full fixed top-0 z-20 ">
      <div className="w-5/6 mx-auto   py-3  flex justify-between items-center">
        <div className="">
          <img
            src="https://www.getonecard.app/images/One_logo_69by24.svg"
            alt="OneCard Logo"
            className="h-10 w-16"
            onClick={() => handleApply(navigate, "/")}
          />
        </div>
        <div className=" flex ">
          <div className="hidden lg:flex space-x-1 items-center ">
            {allLinks}
          </div>
          <div className="flex items-center gap-4">
            {" "}
            {/* Adjusted this div */}
            <div className="lg:hidden ">
              <button
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-300"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={() => handleApply(navigate, "/apply")}
              className="bg-[#1893f7]  text-white  h-7 w-24 rounded-sm font-bold text-sm font-serif transition duration-300 hover:bg-blue-600 mr-4"
            >
              {" "}
              {/* Added margin right for spacing */}
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "flex" : "hidden"} lg:hidden justify-center`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {allLinks.map((link, index) => (
            <div key={index} className="mt-1">
              {link}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

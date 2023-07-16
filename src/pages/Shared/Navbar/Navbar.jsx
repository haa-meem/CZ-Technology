import { Link } from "react-router-dom";
import logo from "../../../assets/cZ technology.png";

const Navbar = () => {
    const navLists = <>
        <li className="hover:bg-[#FCA311] rounded-md"><Link to="banner" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
        <li className="hover:bg-[#FCA311] rounded-md"><Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About Us</Link></li>
        <li className="hover:bg-[#FCA311] rounded-md"><Link to="services" spy={true} smooth={true} offset={-70} duration={500}>Services</Link></li>
        <li className="hover:bg-[#FCA311] rounded-md"><Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
        <li className="hover:bg-[#FCA311] rounded-md"><Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Us</Link></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLists}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLists}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
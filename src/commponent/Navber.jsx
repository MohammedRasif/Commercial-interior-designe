import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const Navber = () => {
    const navLinks = 
    <>
    <li> <NavLink to="/">Home</NavLink> </li>
    <li> <NavLink to="/service">Service</NavLink></li>
    <li> <NavLink to="/blog">Blog</NavLink></li>
    <li> <NavLink to="/register">Register</NavLink> </li>
    <li> <NavLink to="/contact">Contact Us</NavLink> </li>
    
    </>;

    const {logout,user} = useAuth()
    return (

        <div>
            <div className="navbar bg-gray-600 text-white ">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
            </ul>
            </div>
            <a className="font-bold text-4xl">R A S I F</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navLinks}
            </ul>
        </div>
        <div className="navbar-end">
            <Link to="/login"><button className=" btn font-bold text-2xl mr-5">Login</button></Link>
        </div>
        </div>

        </div>
    );
};

export default Navber;
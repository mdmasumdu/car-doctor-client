import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvide/AuthProvider";
const Nav = () => {

  const {logout,user} =useContext(AuthContext)

  const handlelogout =()=>{
    logout()
    .then(()=>{})
    .catch(()=>{})
  }
    const links =<>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/'>About</NavLink>
    <NavLink to='/'>Contact</NavLink>
    {
      user? <>
          <NavLink to="/mycart">MyCart</NavLink>
          <NavLink onClick={handlelogout}>logout</NavLink>
      </> : <NavLink to='/login'>login</NavLink>
    }
    </>
    return (
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl w-20"><img src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-black">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a className="border border-red-400 p-2 rounded-lg hover:btn text-[#FF3811]">APPOINTMENT</a>
          <Link to='/register' className="border border-red-400 p-2 rounded-lg hover:btn text-[#FF3811]">Register</Link>
        </div>
      </div>
    );
};

export default Nav;
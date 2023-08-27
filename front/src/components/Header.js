import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state)=> state.user)
  console.log(userData)
  const dispatch = useDispatch()

  const handleShowMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  const handleLogout = () => {
    dispatch(logoutRedux())
    toast("Logout Successful!")
  }

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="imgs/mm.png" width="125px" alt="Logo" />
            </Link>
          </div>
          <nav>
            <ul id="MenuItems">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? <img src={userData.image} className="h-full w-full"/> : <HiOutlineUserCircle />}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col">
                <Link to={"/Login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link>
                {
                  userData.image ? <p className="cursor-pointer text-white px-2 bg-red-500" onClick={handleLogout}>Logout</p> : <Link to ={"Login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link>
                }
              </div>
            )}
          </div>
          {/* cart img*/}
          {/* <a href="cart.html"><img src="images/cart.png" width="30px" height="30px"/></a> */}
          <img
            src="/imgs/menu.png"
            alt="Menu"
            onClick={handleShowMenu}
            className="menu-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

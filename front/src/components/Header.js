import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="header">
        <div class="container">
          <div class="navbar">
            <div class="logo">
            <Link to="/">
                <img src="imgs/mm.png" width="125px" />
                </Link>
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                <Link to="/products"> Products</Link>
                </li>
                <li>
                <Link to="/contact"> Contact</Link>
                </li>
              </ul>
            </nav>
            {/* cart img*/}
            {/* <a href="cart.html"><img src="images/cart.png" width="30px" height="30px"/></a> */}
            <img
              src="/imgs/menu.png"
              onclick="menutoggle()"
              className="menu-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
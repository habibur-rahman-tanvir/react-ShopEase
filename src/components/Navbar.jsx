import { NavLink } from "react-router-dom";

import profiePlaceholder from "../assets/user.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-2 py-1 text-white bg-emerald-800">
      <h1 className="text-3xl font-semibold text-shadow-white text-shadow-2xs">
        Shop <span className="text-pink-500">Ease</span>
      </h1>

      <div className="flex items-center space-x-4">
        <ul className="flex gap-3 text-xl font-normal">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : ""
            }
          >
            <li className="hover:text-yellow-600">Home</li>
          </NavLink>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : ""
            }
          >
            <li className="hover:text-yellow-600">Cart</li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : ""
            }
          >
            <li className="hover:text-yellow-600">Profile</li>
          </NavLink>
        </ul>
        <img className="w-10 aspect-square" src={profiePlaceholder} />
      </div>
    </nav>
  );
};

export default Navbar;

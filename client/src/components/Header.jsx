import { Button, Navbar, NavbarCollapse, NavbarToggle, TextInput } from "flowbite-react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="text-blue-500 px-2 py-1">Aditya's</span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 px-4 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button>Sign In</Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 ${
              isActive ? "text-blue-500 font-bold" : "text-gray-500"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block px-4 py-2 ${
              isActive ? "text-blue-500 font-bold" : "text-gray-500"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `block px-4 py-2 ${
              isActive ? "text-blue-500 font-bold" : "text-gray-500"
            }`
          }
        >
          Projects
        </NavLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;

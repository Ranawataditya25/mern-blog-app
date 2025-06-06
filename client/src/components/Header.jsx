import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleSignout = async () => {
      try {
        const res = await fetch('/api/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          } else {
            dispatch(signoutSuccess());
          }
      } catch (error) {
        console.log(error.message);
      }
    };

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
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
      <Button className="w-12 h-10 lg:hidden" color="gray" pill >
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <DropdownHeader>
             <span className="block text-sm">@{currentUser.username}</span>
             <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </DropdownHeader>
            <Link to={'/dashboard?tab=profile'}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider/>
            <DropdownItem onClick={handleSignout}>Sign Out</DropdownItem>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button>Sign In</Button>
          </Link>
        )}
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

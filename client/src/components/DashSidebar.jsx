// import {
//   Sidebar,
//   SidebarItem,
//   SidebarItemGroup,
//   SidebarItems,
// } from "flowbite-react";
// import { useEffect, useState } from "react";
// import { HiUser, HiArrowSmRight } from "react-icons/hi";
// import { useNavigate, useLocation } from "react-router-dom";

// const DashSidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [tab, setTab] = useState("");

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tabFromUrl = urlParams.get("tab");
//     if (tabFromUrl) {
//       setTab(tabFromUrl);
//     }
//   }, [location.search]);

//   return (
//     <Sidebar className="w-full md:w-56">
//       <SidebarItems>
//         <SidebarItemGroup>
//           <SidebarItem
//             active={tab === "profile"}
//             icon={HiUser}
//             label={"User"}
//             labelColor="dark"
//             onClick={() => navigate("/dashboard?tab=profile")}
//           >
//             Profile
//           </SidebarItem>
//           <SidebarItem
//             icon={HiArrowSmRight}
//             className="cursor-pointer"
//             onClick={() => console.log("Sign out")}
//           >
//             Sign Out
//           </SidebarItem>
//         </SidebarItemGroup>
//       </SidebarItems>
//     </Sidebar>
//   );
// };

// export default DashSidebar;

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

const DashSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

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
    <Sidebar className="w-full md:w-56">
      <SidebarItems>
        <SidebarItemGroup>
          <Link to="/dashboard?tab=profile">
            <SidebarItem
              active={tab === "profile"}
              icon={HiUser}
              label={"User"}
              labelColor="dark"
              as="div"
            >
              Profile
            </SidebarItem>
          </Link>
          <SidebarItem onClick={handleSignout} icon={HiArrowSmRight} className="cursor-pointer">
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};

export default DashSidebar;

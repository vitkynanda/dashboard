import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const routes = [
  {
    name: "Dashboard",
    pathname: "/",
    icon: <DashboardIcon />,
    isActive: false,
  },
  { name: "Users", pathname: "/users", icon: <GroupIcon />, isActive: false },
  {
    name: "Products",
    pathname: "/products",
    icon: <Inventory2Icon />,
    isActive: false,
  },
];

export default routes;

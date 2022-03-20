import React, { createContext } from "react";
import { useRouter } from "next/router";

const UserContext = createContext({
  username: "",
  userrole: "",
  isLogin: false,
  handleLogin: () => {},
  handleLogout: () => {},
});

const UserContextProvider = () => {
  const [user, setUser] = useState({});
  const router = useRouter();

  const handleLogin = () => {};
  const handleLogout = () => {};
};

export default UserContextProvider;

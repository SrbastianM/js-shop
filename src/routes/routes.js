import Home from "../pages/home";
import Login from "../pages/login";
import User from "../pages/user";

export const routes = [
  { path: "/", callback: Home },
  { path: "/login", callback: Login },
  { path: "/user", callback: User },
];

import JYDiscover from "@/pages/discover";
import JYMy from "@/pages/my";
import JYFriend from "@/pages/friend";

const routes = [
  {
    path: "/",
    exact: true,
    component: JYDiscover,
  },
  {
    path: "/my",
    component: JYMy,
  },
  {
    path: "/friend",
    component: JYFriend,
  },
];

export default routes;

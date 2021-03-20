import JYDiscover from "@/pages/discover";
import JYMy from "@/pages/my";
import JYFriend from "@/pages/friend";
import JYDownload from "@/pages/download";

const routes = [
  {
    path: "/",
    exact: true,
    component: JYDiscover,
  },
  {
    path: "/discover",
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
  {
    path: "/download",
    component: JYDownload,
  },
];

export default routes;

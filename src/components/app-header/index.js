import React, { memo } from "react";
import { HashRouter, NavLink } from "react-router-dom";

export default memo(function JYAppHeader() {
  return (
    <>
      <HashRouter>
        <NavLink to="/" exact>
          发现音乐
        </NavLink>
        <NavLink to="/my">我的音乐</NavLink>
        <NavLink to="/friend">朋友</NavLink>
      </HashRouter>
    </>
  );
});

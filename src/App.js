import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "@/router";

import JYAppHeader from "@/components/app-header";
import JYAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <div>
      <HashRouter>
        {/* app-header */}
        <JYAppHeader />
        {renderRoutes(routes)}
        {/* app-footer */}
        <JYAppFooter />
      </HashRouter>
    </div>
  );
});

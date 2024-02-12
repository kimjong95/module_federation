import React from "react";
import { Link, Outlet } from "react-router-dom";
import { appJobsPrefix, appNetworkPrefix } from "../constants/prefix";

const Layout = () => (
  <div>
    <nav>
      <li>
        <Link to={`/${appJobsPrefix}/1`}>App Jobs Page 1</Link>
        <Link to={`/${appJobsPrefix}/2`}>App Jobs Page 2</Link>
        <Link to={`/${appNetworkPrefix}/a`}>App Network Page a</Link>
        <Link to={`/${appNetworkPrefix}/b`}>App Network Page b</Link>
      </li>
    </nav>
    <Outlet />
  </div>
);

export default Layout;

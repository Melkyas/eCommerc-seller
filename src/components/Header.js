

import React, { useContext } from "react";
import { AppContext } from "../main/context";

function Header() {
  const { setAuthenticated } = useContext(AppContext);
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-danger text-light">
        <div className="container-fluid">
          <h1>Shop Online</h1>
        </div>
        <div className="text-right p-4 click" onClick={(e) => setAuthenticated(false)}>
          Logout
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-right"></div>
        </div>
      </div>
    </>
  );
}

export default Header;

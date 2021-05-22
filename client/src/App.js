import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from "./components/Register.js";
import ShowUsers from "./components/ShowUsers";
import StudentPage from "./components/StudentPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              STUDENT PORTAL
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/register"}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/students"}>
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/" component={StudentPage} />
              <Route path="/register" component={Register} />
              <Route path="/students" component={ShowUsers} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

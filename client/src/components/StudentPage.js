import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const StudentPage = () => {
  return (
    <div>
      <h1 className="display-3 text-center">Hey, Students !!</h1>
      <p className="lead mt-4 p-4">
        This is a simple application where Students can register their marks and
        see their <em>rank </em>
        on the LEADERBOARD.
      </p>
      <hr className="my-2" />

      <p className="lead mt-4 text-center">
        <Button color="success mr-4">
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            Register yourself
          </Link>
        </Button>
        <Button color="warning">
          <Link
            to="/students"
            style={{ textDecoration: "none", color: "white" }}
          >
            View LEADERBOARD
          </Link>
        </Button>
      </p>
    </div>
  );
};

export default StudentPage;

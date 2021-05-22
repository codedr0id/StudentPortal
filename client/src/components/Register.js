import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createStudent } from "../apicalls";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    maths: "",
    physics: "",
    chemistry: "",
    total: "",
    percentage: "",
    checked: false,
  });

  const {
    name,
    rollno,
    maths,
    physics,
    chemistry,
    total,
    percentage,
    checked,
  } = formData;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(total, percentage);
    setFormData({
      ...formData,
    });
    console.log(formData);
    createStudent(formData).then((data) => {
      if (data !== undefined) {
        if (data.err) {
          console.log(data.error);
          toast.error("❎ Registration failed", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        } else {
          console.log(data);
          toast.success("🧑 User registered successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          setFormData({
            name: "",
            rollno: "",
            maths: "",
            physics: "",
            chemistry: "",
            total: 0,
            percentage: 0,
          });
        }
      }
    });
  };

  const handleFormChange = (name) => (event) => {
    const value = event.target.value;
    let total =
      (parseInt(physics) || 0) +
      (parseInt(chemistry) || 0) +
      (parseInt(maths) || 0);

    let percentage = Math.round(
      ((parseInt(physics) || 0) +
        (parseInt(chemistry) || 0) +
        (parseInt(maths) || 0)) /
        3
    );
    setFormData({
      ...formData,
      [name]: value,
      total,
      percentage,
    });
    // console.log(formData);
  };

  return (
    <form>
      <h2 className="text-center text-dark">Register</h2>

      <div className="form-group col-md-6 float-left">
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleFormChange("name")}
          className="form-control"
          placeholder="Name"
          required
        />
      </div>

      <div className="form-group col-md-6 float-right">
        <label>Roll Number</label>
        <input
          type="text"
          name="rollno"
          value={rollno}
          onChange={handleFormChange("rollno")}
          className="form-control"
          placeholder="Roll No."
          required
        />
      </div>

      <div className="form-group">
        <label>Maths</label>
        <input
          type="text"
          name="maths"
          value={maths}
          onChange={handleFormChange("maths")}
          className="form-control"
          placeholder="Enter MATHS marks (out of 100)"
          required
        />
      </div>
      <div className="form-group">
        <label>Physics</label>
        <input
          type="text"
          name="physics"
          value={physics}
          onChange={handleFormChange("physics")}
          className="form-control"
          placeholder="Enter PHYSICS marks (out of 100)"
          required
        />
      </div>
      <div className="form-group">
        <label>Chemistry</label>
        <input
          type="text"
          name="chemistry"
          value={chemistry}
          onChange={handleFormChange("chemistry")}
          className="form-control"
          placeholder="Enter CHEMISTRY marks (out of 100)"
          required
        />
      </div>

      <div className="form-group col-md-6 float-left">
        <label>Total Marks</label>
        <input
          type="number"
          name="total"
          value={
            (parseInt(physics) || 0) +
            (parseInt(chemistry) || 0) +
            (parseInt(maths) || 0)
          }
          // onChange={handleFormChange("total")}
          className="form-control"
          required
          disabled
        />
      </div>

      <div className="form-group col-md-6 float-right">
        <label>Percentage</label>
        <input
          type="number"
          name="percentage"
          value={Math.round(
            ((parseInt(physics) || 0) +
              (parseInt(chemistry) || 0) +
              (parseInt(maths) || 0)) /
              3
          )}
          // onChange={handleFormChange("percentage")}
          className="form-control"
          required
          disabled
        />
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          name="checked"
          value={checked}
          onChange={handleFormChange("checked")}
          className="mr-4"
          required
        />
        <label>Confirm that the above marks are correct</label>
      </div>
      {checked ? (
        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={onSubmit}
        >
          Register
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={onSubmit}
          disabled
        >
          Register
        </button>
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <p className="forgot-password text-right mt-2">
        Already registered ? <Link to={"/students"}>Check name here</Link>
      </p>
    </form>
  );
};

export default Register;

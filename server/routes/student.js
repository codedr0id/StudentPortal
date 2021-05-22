var express = require("express");
const {
  showAllStudents,
  createStudent,
  getStudentByRollNo,
  getStudents,
  getAllRollNo,
} = require("../controllers/student");
var router = express.Router();

router.param("rollno", getStudentByRollNo);

router.get("/students", showAllStudents);
router.get("/student/:rollno", getStudents);
router.get("/rollno", getAllRollNo);

router.post("/student/create", createStudent);

module.exports = router;

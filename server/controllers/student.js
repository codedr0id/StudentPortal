const Student = require("../models/student");

exports.showAllStudents = (req, res) => {
  Student.find().exec((err, students) => {
    if (err) {
      return res.status(400).json({
        error: "No Categories found",
      });
    }
    for (student of students) {
      // student._id = undefined;
      student.maths = undefined;
      student.physics = undefined;
      student.chemistry = undefined;
      student.__v = undefined;
    }
    res.json(students);
  });
};

exports.createStudent = (req, res) => {
  const student = new Student(req.body);
  student.save((err, student) => {
    if (err) {
      return res.status(400).json({
        err: err,
      });
    }
    res.json({
      name: student.name,
      rollno: student.rollno,
      id: student._id,
    });
  });
};

exports.getStudents = (req, res) => {
  res.json(req.profile);
};

exports.getStudentByRollNo = (req, res, next, rollno) => {
  Student.find({ rollno: rollno }).exec((err, student) => {
    if (err) {
      return res.status(400).json({
        error: "Cannot find student",
      });
    }
    req.profile = student;
    next();
  });
};

exports.getAllRollNo = (req, res) => {
  Student.distinct("rollno", {}, (err, rollno) => {
    if (err) {
      return res.status(400).json({
        error: "Cannot find unique Colleges",
      });
    }
    res.json(rollno);
  });
};

const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./connection/db");
const mongoose = require("mongoose");
const Student = require("./model/Student");
app.use(express.json());
app.use(cors());

const PORT = 3000;

ConnectDB();

app.post("/api/student", async (req, res) => {
  try {
    const newStudent = req.body;

    const student = new Student(newStudent);
    await student.save();

    res.status(200).json({
      success: true,
      message: "Successfully Created Student",
      student: student,
    });
  } catch (error) {
    console.log("Error Creating Student", error);
  }
});

app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      message: "Successfully fetched all students",
      students: students,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get students",
      error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log("Application is running in      PORT", PORT);
});

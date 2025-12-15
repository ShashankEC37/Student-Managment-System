import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Create a function which will do an api call to backend
export const getAllStudents = async () => {
  try {
    const response = await API.get("/students");
    console.log("response", response);
    const studentsArray = response.data.students;
    console.log("studentArray",studentsArray)
    return studentsArray;
  } catch (error) {
    console.log("Error getting Students", error);
  }
};

// POST: Add a new student
export const addStudent = async ({ name, age }) => {
  try {
    const response = await API.post("/student", {
      name,
      age,
    });

    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};

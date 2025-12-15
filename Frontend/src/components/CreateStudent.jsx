import React, { useState } from "react";
import { addStudent } from "../services/api";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const result = await addStudent({ name, age: Number(age) });

      setMessage("Student added successfully!");

      // Reset form
      setName("");
      setAge("");
    } catch (error) {
      setMessage("Failed to add student");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create Student</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Add Student
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #aaa",
  },
  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default CreateStudent;

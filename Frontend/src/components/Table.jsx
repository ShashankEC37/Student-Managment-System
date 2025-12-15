import React, { useEffect, useState } from "react";
import "./Table.css";
import { getAllStudents } from "../services/api";

const Table = () => {
   const [students, setStudents] = useState([]);

  async function usefetchStudents(){
    try{
      const students = await getAllStudents();
      setStudents(students)
      
    }
    catch(error){

    }
  }

  useEffect(() => {
    usefetchStudents();

  }, []);

  return (
    <>
    <div>STUDENT TABLE</div>
      <div className='table'>
        <table>
          <thead>
              <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>ACTION</th>
              </tr>
          </thead>
          <tbody>
          {students.map((student)=>(
              <tr key={student._id}>
                 <td>{student.name}</td>
                 <td>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div><button>Edit</button></div>
      </>
    )
  }
  
  export default Table
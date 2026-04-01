import React, { useState } from "react";

function StudentManager() {

  const [students, setStudents] = useState([
    { id: 1, name: "Moni", course: "CSE" },
    { id: 2, name: "Ravi", course: "IT" },
    { id: 3, name: "Sita", course: "ECE" },
    { id: 4, name: "Arjun", course: "AI" },
    { id: 5, name: "Kiran", course: "DS" }
  ]);

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value
    });
  };

  const addStudent = () => {
    if (!newStudent.id || !newStudent.name || !newStudent.course) {
      alert("Fill all fields");
      return;
    }

    setStudents([...students, newStudent]);

    setNewStudent({ id: "", name: "", course: "" });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div>
      <h2>Student Manager</h2>

      <input name="id" placeholder="ID" value={newStudent.id} onChange={handleChange}/>
      <input name="name" placeholder="Name" value={newStudent.name} onChange={handleChange}/>
      <input name="course" placeholder="Course" value={newStudent.course} onChange={handleChange}/>

      <button onClick={addStudent}>Add</button>

      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <ul>
          {students.map(s => (
            <li key={s.id}>
              {s.id} - {s.name} - {s.course}
              <button onClick={() => deleteStudent(s.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentManager;
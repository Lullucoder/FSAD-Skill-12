import React, { useState } from 'react';
import './App.css';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';

/**
 * App.js - Full Stack Student Management System
 * Connects React frontend with Spring Boot backend via axios
 *
 * State:
 *   refresh    - increments to trigger StudentList re-fetch
 *   editStudent - holds student being edited (null = add mode)
 */
function App() {
  const [refresh, setRefresh]         = useState(0);
  const [editStudent, setEditStudent] = useState(null);

  const handleStudentAdded = () => {
    setRefresh(prev => prev + 1); // triggers StudentList useEffect
  };

  const handleUpdate = () => {
    setEditStudent(null);
    setRefresh(prev => prev + 1);
  };

  const handleEdit = (student) => {
    setEditStudent(student); // passes student data to AddStudent form
  };

  const handleCancelEdit = () => {
    setEditStudent(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎓 Student Management System</h1>
        <p>Full Stack CRUD — React + Spring Boot + H2 Database</p>
      </header>

      <main className="main">
        <AddStudent
          onStudentAdded={handleStudentAdded}
          editStudent={editStudent}
          onUpdate={handleUpdate}
          onCancelEdit={handleCancelEdit}
        />
        <StudentList
          refresh={refresh}
          onEdit={handleEdit}
        />
      </main>
    </div>
  );
}

export default App;

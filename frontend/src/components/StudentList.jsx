import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:8084/students';

/**
 * StudentList.jsx
 * Task 2: Fetches and displays all students from Spring Boot backend
 * - axios GET /students
 * - Delete button calls axios DELETE
 * - Update button passes student to AddStudent form
 * - Auto-refreshes after add/update/delete
 */
function StudentList({ refresh, onEdit }) {

  const [students, setStudents] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  // Task 2a: axios GET - fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API);
        setStudents(res.data);
      } catch (err) {
        setError('Failed to connect to backend. Is Spring Boot running on port 8084?');
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, [refresh]); // re-fetches when refresh changes

  // Task 4a: Delete student
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this student?')) return;
    try {
      await axios.delete(`${API}/${id}`);
      setStudents(students.filter(s => s.id !== id));
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  if (loading) return <div className="loading">⏳ Loading students from backend...</div>;
  if (error)   return <div className="error">❌ {error}</div>;

  return (
    <div className="table-card">
      <h2>📋 Student List <span className="count">({students.length} students)</span></h2>

      {students.length === 0 ? (
        <p className="empty">No students found. Add one above!</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td className="action-btns">
                  {/* Task 4b: Update button - prefills form */}
                  <button onClick={() => onEdit(s)} className="btn-edit">✏️ Edit</button>
                  {/* Task 4a: Delete button */}
                  <button onClick={() => handleDelete(s.id)} className="btn-del">🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;

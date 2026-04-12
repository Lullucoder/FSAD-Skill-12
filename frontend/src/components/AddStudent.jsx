import React, { useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:8084/students';

/**
 * AddStudent.jsx
 * Task 3: React form to add a new student
 * - useState for form inputs (name, email, course)
 * - axios POST to Spring Boot backend
 * - Clears form on success
 * - Calls onStudentAdded() to refresh student list
 */
function AddStudent({ onStudentAdded, editStudent, onUpdate, onCancelEdit }) {

  const [form, setForm] = useState(
    editStudent || { name: '', email: '', course: '' }
  );

  // Sync form when editStudent changes
  React.useEffect(() => {
    if (editStudent) setForm(editStudent);
    else setForm({ name: '', email: '', course: '' });
  }, [editStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Task 3b: Submit via axios POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) {
      alert('Please fill in all fields!');
      return;
    }
    try {
      if (editStudent) {
        // Task 4b: Update via axios PUT
        await axios.put(`${API}/${editStudent.id}`, form);
        onUpdate();
      } else {
        await axios.post(API, form);
        onStudentAdded();
      }
      // Task 3c: Clear form after submission
      setForm({ name: '', email: '', course: '' });
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="form-card">
      <h2>{editStudent ? '✏️ Update Student' : '➕ Add New Student'}</h2>
      <form onSubmit={handleSubmit} className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          className="input-box"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="input-box"
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
          className="input-box"
        />
        <div className="btn-group">
          <button type="submit" className={editStudent ? 'btn btn-update' : 'btn btn-add'}>
            {editStudent ? '✔ Update' : '➕ Add'}
          </button>
          {editStudent && (
            <button type="button" onClick={onCancelEdit} className="btn btn-cancel">
              ✖ Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddStudent;

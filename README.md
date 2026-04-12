# FullStackApp - Student Management System

## Skill 12: Full Stack CRUD using React + Spring Boot

---

## Repository Structure (as required by task)

```
FullStackApp/
├── backend/    ← Spring Boot code
│   ├── pom.xml
│   └── src/main/java/com/student/
│       ├── StudentBackendApplication.java
│       ├── model/Student.java
│       ├── repository/StudentRepository.java
│       ├── service/StudentService.java
│       └── controller/StudentController.java
└── frontend/   ← React code
    ├── package.json
    └── src/
        ├── App.js
        ├── App.css
        ├── index.js
        └── components/
            ├── AddStudent.jsx
            └── StudentList.jsx
```

---

## How to Run

### Step 1 - Start Backend (Spring Boot)
Import `backend` folder in Eclipse as Maven project.
Run `StudentBackendApplication.java`.
Backend starts on http://localhost:8084

### Step 2 - Start Frontend (React)
```bash
cd frontend
npm install
npm start
```
Frontend starts on http://localhost:3000

---

## REST API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | /students | Get all students |
| GET | /students/{id} | Get by ID |
| POST | /students | Add student |
| PUT | /students/{id} | Update student |
| DELETE | /students/{id} | Delete student |

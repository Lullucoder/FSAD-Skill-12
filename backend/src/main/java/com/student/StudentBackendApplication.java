package com.student;

import com.student.model.Student;
import com.student.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StudentBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentBackendApplication.class, args);
        System.out.println("\n============================================");
        System.out.println("  Student Backend API - Port 8084");
        System.out.println("--------------------------------------------");
        System.out.println("  GET    http://localhost:8084/students");
        System.out.println("  POST   http://localhost:8084/students");
        System.out.println("  PUT    http://localhost:8084/students/{id}");
        System.out.println("  DELETE http://localhost:8084/students/{id}");
        System.out.println("============================================\n");
    }

    @Bean
    public CommandLineRunner loadData(StudentRepository repo) {
        return args -> {
            repo.save(new Student("Arjun Sharma",  "arjun@college.com",  "B.Tech Computer Science"));
            repo.save(new Student("Priya Verma",   "priya@college.com",  "MCA Data Science"));
            repo.save(new Student("Ravi Kumar",    "ravi@college.com",   "B.Sc IT"));
            repo.save(new Student("Sneha Patel",   "sneha@college.com",  "B.Tech Electronics"));
            repo.save(new Student("Kiran Reddy",   "kiran@college.com",  "MBA"));
            System.out.println("Sample students loaded! Total: " + repo.count());
        };
    }
}

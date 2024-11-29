package com.sampath.assignment.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eid;

    @Column(name = "first_name", nullable = false)
    private String firstName;


    @Column(name="password", nullable = false)
    private String password;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name="title")
    private String title;

    @Column(name = "photograph_path")
    private String photograph_path;

    @Column(name = "department_id", nullable=false)
    private String department_id;

}

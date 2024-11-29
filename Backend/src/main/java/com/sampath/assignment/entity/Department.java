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
@Table(name = "Department")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use IDENTITY for MySQL AUTO_INCREMENT
    private Long id;

    @Column(name = "department_name", nullable = false)
    private String departmentName;

    @Column(name = "capacity")
    private int capacity;

}

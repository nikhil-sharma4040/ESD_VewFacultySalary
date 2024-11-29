package com.sampath.assignment.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.*;

public record EmployeeRequest (
    @NotNull(message = "Employee should be present")
    @NotEmpty(message = "Employee should be not be empty")
    @NotBlank(message = "Employee should not be blank")
    @JsonProperty("first_name")
    String firstName,

    @JsonProperty("last_name")
    String lastName,

    @NotNull(message="Employee email is required")
    @Email(message = "Email must be in correct format")
    @JsonProperty("email")
    String email,

    @JsonProperty("password")
    @NotNull(message = "Password is required")
    @NotEmpty(message = "Password cannot be empty")
    @NotBlank(message = "Password cannot be blank")
    @Size(min = 6, max = 12, message = "Password must be between 6 and 12 characters")
    String password,

    @JsonProperty("title")
    String title,
    @JsonProperty("photograph_path")
    String photograph_path,
    @NotNull(message="Employee department is required")

    @JsonProperty("department")
    String department

)
    {}


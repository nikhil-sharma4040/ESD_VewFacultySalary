package com.sampath.assignment.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.*;


public record EmployeLogin (
    @NotNull(message="Employee email is required")
    @Email(message = "Email must be in correct format")
    @JsonProperty("email")
    String email,

    @JsonProperty("password")
    @NotNull(message = "Password is required")
    @NotEmpty(message = "Password cannot be empty")
    @NotBlank(message = "Password cannot be blank")
    @Size(min = 6, max = 12, message = "Password must be between 6 and 12 characters")
    String password){
}

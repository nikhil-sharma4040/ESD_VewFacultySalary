package com.sampath.assignment.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Date;

public record SalaryRequest (

        @JsonProperty("month")
        @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS") // Format without timezone
        LocalDateTime month,

        @JsonProperty("eid")
        int eid
)
{}


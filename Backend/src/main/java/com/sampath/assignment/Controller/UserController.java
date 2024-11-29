package com.sampath.assignment.Controller;

import com.sampath.assignment.Services.CustomerService;
import com.sampath.assignment.dto.EmployeLogin;
import com.sampath.assignment.dto.EmployeeRequest;
import com.sampath.assignment.dto.History;
import com.sampath.assignment.dto.SalaryRequest;
import com.sampath.assignment.entity.EmployeeSalary;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "Authorization")
@RequiredArgsConstructor
public class UserController {
    private final CustomerService service;

    @GetMapping("/")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("hello");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid EmployeLogin request) {
        System.out.println("fsdd");
        return ResponseEntity.ok(service.login(request));
    }

     @PostMapping("salary")
      public ResponseEntity<List<EmployeeSalary>> salary(@RequestBody @Valid SalaryRequest request) {
      return ResponseEntity.ok(service.salary(request));
 }


      @PostMapping("/history")
      public ResponseEntity<List<EmployeeSalary>> history(@RequestBody @Valid History request) {
       return ResponseEntity.ok(service.history(request));
}


}
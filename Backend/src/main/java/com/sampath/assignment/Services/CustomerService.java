package com.sampath.assignment.Services;

import com.sampath.assignment.dto.EmployeLogin;
import com.sampath.assignment.dto.EmployeeRequest;
import com.sampath.assignment.dto.History;
import com.sampath.assignment.dto.SalaryRequest;
import com.sampath.assignment.entity.Employee;
import com.sampath.assignment.entity.EmployeeSalary;
import com.sampath.assignment.helper.EncryptPassword;
import com.sampath.assignment.helper.JWTHelper;
import com.sampath.assignment.mapper.EmployeeMapper;
import com.sampath.assignment.repo.EmployeeRepo;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {
    public final EmployeeMapper mapper;
    private final EncryptPassword encryptPassword;
    private final JWTHelper jwtHelper;
    private final EmployeeRepo employeeRepo;

    public String login(@Valid EmployeLogin request) {
        Employee employee =employeeRepo.findByEmail(request.email()).orElse(null);
        if(!encryptPassword.validates(request.password(), employee.getPassword())) {
            return "Wrong Password or Email";
        }
        return jwtHelper.generateToken(request.email());
    }


    public List<EmployeeSalary> salary(@Valid SalaryRequest request) {
        LocalDateTime startOfDay = request.month().toLocalDate().atStartOfDay(); // 2024-11-01T00:00:00
        LocalDateTime endOfDay = startOfDay.plusDays(1).minusNanos(1); // 2024-11-01T23:59:59.999999

        List<EmployeeSalary> employee_salary =employeeRepo.findAllSalaryByEidAndDate(request.eid(),startOfDay,endOfDay);
        return employee_salary;

    }

        public List<EmployeeSalary> history(@Valid History request) {
            List<EmployeeSalary> employee_salary =employeeRepo.findAllSalaryByEid (request.eid());


            return employee_salary;
    }


}

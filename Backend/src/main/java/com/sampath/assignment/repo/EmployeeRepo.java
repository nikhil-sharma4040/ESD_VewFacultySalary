package com.sampath.assignment.repo;

import com.sampath.assignment.entity.Employee;
import com.sampath.assignment.entity.EmployeeSalary;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;
@Repository
public interface EmployeeRepo extends JpaRepository <Employee,Long>{

    @Query("SELECT ES FROM EmployeeSalary ES where ES.eid=?1")
    List<EmployeeSalary> findAllSalaryByEid(int eid);

    @Query("SELECT ES FROM EmployeeSalary ES WHERE ES.eid = ?1 AND ES.paymentDate BETWEEN ?2 AND ?3")
    List<EmployeeSalary> findAllSalaryByEidAndDate(int eid, LocalDateTime startOfDay, LocalDateTime endOfDay);


    Optional<Employee> findByEmail(String email);
    Optional<Employee> findByEmailAndPassword(String email,String password);

}





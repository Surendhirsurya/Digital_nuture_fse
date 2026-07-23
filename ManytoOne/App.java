package com.cognizant.ormlearn;

import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearn.model.Department;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;

@SpringBootApplication
public class App implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private DepartmentService departmentService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        testGetEmployee();

        // Uncomment one at a time
        // testAddEmployee();

        // testUpdateEmployee();
    }

    private void testGetEmployee() {

        System.out.println("-----GET EMPLOYEE-----");

        Employee employee = employeeService.get(1);

        System.out.println(employee);

        System.out.println(employee.getDepartment());

    }

    private void testAddEmployee() throws Exception {

        System.out.println("-----ADD EMPLOYEE-----");

        Employee employee = new Employee();

        employee.setName("Rahul");

        employee.setSalary(60000);

        employee.setPermanent(true);

        employee.setDateOfBirth(
                new SimpleDateFormat("dd/MM/yyyy").parse("15/08/1998"));

        Department department = departmentService.get(1);

        employee.setDepartment(department);

        employeeService.save(employee);

        System.out.println(employee);

    }

    private void testUpdateEmployee() {

        System.out.println("-----UPDATE EMPLOYEE-----");

        Employee employee = employeeService.get(1);

        Department department = departmentService.get(2);

        employee.setDepartment(department);

        employeeService.save(employee);

        System.out.println(employee);

    }

}
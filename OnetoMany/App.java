package com.cognizant.ormlearn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearn.model.Department;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.service.DepartmentService;

@SpringBootApplication
public class App implements CommandLineRunner {

    @Autowired
    private DepartmentService departmentService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {

        testGetDepartment();

    }

    private void testGetDepartment() {

        System.out.println("---------------");

        Department department = departmentService.get(1);

        System.out.println(department);

        System.out.println();

        System.out.println("Employees");

        for (Employee employee : department.getEmployeeList()) {
            System.out.println(employee);
        }

        System.out.println("---------------");

    }

}
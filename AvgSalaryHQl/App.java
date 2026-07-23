package com.cognizant.ormlearn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearn.service.EmployeeService;

@SpringBootApplication
public class App implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {

        testGetAverageSalary();

    }

    private void testGetAverageSalary() {

        System.out.println("----------------------------");

        int departmentId = 1;

        double averageSalary = employeeService.getAverageSalary(departmentId);

        System.out.println("Department ID : " + departmentId);

        System.out.println("Average Salary : " + averageSalary);

        System.out.println("----------------------------");

    }

}
package com.cognizant.ormlearn;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearn.model.Employee;
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

        testGetAllPermanentEmployees();

    }

    private void testGetAllPermanentEmployees() {

        System.out.println("--------------------------------");

        List<Employee> employees =
                employeeService.getAllPermanentEmployees();

        for (Employee employee : employees) {

            System.out.println(employee);

            System.out.println("Department : "
                    + employee.getDepartment());

            System.out.println("Skills : "
                    + employee.getSkillList());

            System.out.println("--------------------------------");

        }

    }

}
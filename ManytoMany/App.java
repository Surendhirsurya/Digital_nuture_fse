package com.cognizant.ormlearn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.model.Skill;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.SkillService;

@SpringBootApplication
public class App implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private SkillService skillService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {

        //testGetEmployee();

        testAddSkillToEmployee();

    }

    private void testGetEmployee() {

        Employee employee = employeeService.get(1);

        System.out.println(employee);

        System.out.println(employee.getDepartment());

        System.out.println(employee.getSkillList());

    }

    private void testAddSkillToEmployee() {

        Employee employee = employeeService.get(1);

        Skill skill = skillService.get(3);

        employee.getSkillList().add(skill);

        employeeService.save(employee);

        System.out.println("Skill Added Successfully");

        System.out.println(employee);

        System.out.println(employee.getSkillList());

    }

}
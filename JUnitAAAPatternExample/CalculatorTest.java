package com.example;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    Calculator calculator;

    @Before
    public void setUp() {

        System.out.println("Setup Method Executed");

        calculator = new Calculator();

    }

    @Test
    public void testAddition() {

        int a = 10;
        int b = 20;

        int result = calculator.add(a, b);

        assertEquals(30, result);

    }

    @Test
    public void testSubtraction() {

        int a = 20;
        int b = 10;

        int result = calculator.subtract(a, b);

        assertEquals(10, result);

    }

    @After
    public void tearDown() {

        System.out.println("Teardown Method Executed");

    }

}
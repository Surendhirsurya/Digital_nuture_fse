package com.example;

import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionTest {

    @Test
    public void testAssertions() {

        assertEquals(5, 2 + 3);

        assertTrue(5 > 3);

        assertFalse(5 < 3);

        assertNull(null);

        assertNotNull(new Object());
    }
    public void test1() {
        int a = 25;
        int b = 15;

        assertEquals(40, a + b);

        System.out.println("25 + 15 = " + (a + b));
    }
    
    @Test
    public void testNull() {
        String name = null;

        System.out.println("Checking Null");
        assertNull(name);
    }
}

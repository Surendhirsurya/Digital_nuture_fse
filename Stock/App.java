package com.cognizant.ormlearn;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearn.repository.StockRepository;

@SpringBootApplication
public class App implements CommandLineRunner {

    @Autowired
    private StockRepository stockRepository;

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) {

        System.out.println("---------------");
        System.out.println("Facebook - September 2019");
        System.out.println("---------------");

        stockRepository.findByCodeAndDateBetween(
                "FB",
                LocalDate.of(2019, 9, 1),
                LocalDate.of(2019, 9, 30))
                .forEach(System.out::println);



        System.out.println("\n---------------");
        System.out.println("Google Close > 1250");
        System.out.println("---------------");

        stockRepository.findByCodeAndCloseGreaterThan(
                "GOOGL",
                new BigDecimal("1250"))
                .forEach(System.out::println);



        System.out.println("\n---------------");
        System.out.println("Top 3 Highest Volume");
        System.out.println("---------------");

        stockRepository.findTop3ByOrderByVolumeDesc()
                .forEach(System.out::println);



        System.out.println("\n---------------");
        System.out.println("Lowest 3 Netflix Stocks");
        System.out.println("---------------");

        stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX")
                .forEach(System.out::println);

    }
}
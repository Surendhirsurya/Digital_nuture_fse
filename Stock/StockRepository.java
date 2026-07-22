package com.cognizant.ormlearn.repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.ormlearn.model.Stock;

public interface StockRepository extends JpaRepository<Stock, Integer> {

    // 1. Facebook stock in September 2019
    List<Stock> findByCodeAndDateBetween(
            String code,
            LocalDate start,
            LocalDate end);

    // 2. Google stocks where closing price > 1250
    List<Stock> findByCodeAndCloseGreaterThan(
            String code,
            BigDecimal close);

    // 3. Top 3 highest volume
    List<Stock> findTop3ByOrderByVolumeDesc();

    // 4. Lowest 3 Netflix stocks
    List<Stock> findTop3ByCodeOrderByCloseAsc(String code);

}
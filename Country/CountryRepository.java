package com.cognizant.ormlearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.ormlearn.model.Country;

public interface CountryRepository extends JpaRepository<Country, String> {

    // Search country containing text
    List<Country> findByNameContaining(String text);

    // Search country containing text in ascending order
    List<Country> findByNameContainingOrderByNameAsc(String text);

    // Countries starting with a letter
    List<Country> findByNameStartingWith(String alphabet);

}

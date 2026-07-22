package com.Library.service;


import com.Library.repository.BookRepository;

public class BookService {

    private BookRepository repository;

    // Setter Injection
    public void setRepository(BookRepository repository) {
        this.repository = repository;
    }

    public void showBook() {

        System.out.println("Book Service Called");

        repository.displayBook();

    }

}

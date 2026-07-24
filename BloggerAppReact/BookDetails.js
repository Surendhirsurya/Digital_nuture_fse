import React from "react";

function BookDetails() {

    const books = [
        {
            id: 1,
            title: "React Basics",
            author: "Jordan Walke",
            price: 550
        },
        {
            id: 2,
            title: "Java Programming",
            author: "James Gosling",
            price: 700
        },
        {
            id: 3,
            title: "Spring Boot",
            author: "Rod Johnson",
            price: 650
        }
    ];

    return (

        <div className="box">

            <h2>Book Details</h2>

            {books.map(book => (

                <div key={book.id}>

                    <h4>{book.title}</h4>

                    <p>Author : {book.author}</p>

                    <p>Price : ₹{book.price}</p>

                    <hr />

                </div>

            ))}

        </div>

    );
}

export default BookDetails;
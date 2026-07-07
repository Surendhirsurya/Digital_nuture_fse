CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER(10,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
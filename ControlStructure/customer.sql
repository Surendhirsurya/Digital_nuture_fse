CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER(10,2),
    IsVIP VARCHAR2(5),
    LoanInterestRate NUMBER(5,2)
);
SET SERVEROUTPUT ON;

DECLARE
BEGIN
    FOR rec IN (SELECT CustomerID, Age, LoanInterestRate FROM Customers)
    LOOP

        IF rec.Age > 60 THEN

            UPDATE Customers
            SET LoanInterestRate = LoanInterestRate - 1
            WHERE CustomerID = rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount Applied to Customer ID: ' || rec.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;
END;

import React from "react";

function FlightDetails() {

  const flights = [
    {
      id: 1,
      flight: "AI-202",
      from: "Chennai",
      to: "Delhi",
      price: 6500,
    },
    {
      id: 2,
      flight: "6E-401",
      from: "Bangalore",
      to: "Mumbai",
      price: 4500,
    },
    {
      id: 3,
      flight: "SG-330",
      from: "Hyderabad",
      to: "Kolkata",
      price: 5200,
    },
  ];

  return (
    <div>

      <h3>Available Flights</h3>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Fare (₹)</th>
          </tr>
        </thead>

        <tbody>

          {flights.map((flight) => (

            <tr key={flight.id}>
              <td>{flight.flight}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.price}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default FlightDetails;
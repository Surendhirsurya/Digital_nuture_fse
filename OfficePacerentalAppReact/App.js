import officeImage from "./office.jpg";
import "./App.css";

function App() {

  const office = {
    name: "Smart Office Space",
    rent: 55000,
    address: "Chennai, Tamil Nadu"
  };

  const officeList = [
    {
      name: "Smart Office",
      rent: 55000,
      address: "Chennai",
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore",
    },
    {
      name: "Business Hub",
      rent: 65000,
      address: "Hyderabad",
    },
    {
      name: "Corporate Plaza",
      rent: 45000,
      address: "Pune",
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p>
        <b>Rent:</b>{" "}
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green"
          }}
        >
          ₹{office.rent}
        </span>
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item, index) => (
          <div key={index} className="card">

            <h3>{item.name}</h3>

            <p>
              <b>Rent:</b>{" "}
              <span
                style={{
                  color: item.rent < 60000 ? "red" : "green"
                }}
              >
                ₹{item.rent}
              </span>
            </p>

            <p>
              <b>Address:</b> {item.address}
            </p>

          </div>
        ))
      }

    </div>
  );
}

export default App;
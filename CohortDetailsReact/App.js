import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Cohort Dashboard</h1>

      <CohortDetails
        name="React Bootcamp"
        status="ongoing"
        coach="John"
        trainer="Alex"
      />

      <CohortDetails
        name="Java Full Stack"
        status="completed"
        coach="David"
        trainer="Smith"
      />

      <CohortDetails
        name="Spring Boot"
        status="ongoing"
        coach="Rahul"
        trainer="Kumar"
      />
    </div>
  );
}

export default App;
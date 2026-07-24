import React from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";
import "./App.css";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="App">

      <h1>Blogger Application</h1>

      {/* Conditional Rendering using && */}

      {showBooks && <BookDetails />}

      {/* Conditional Rendering using Ternary */}

      {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

      {/* Conditional Rendering using Function */}

      <CourseDetails show={showCourses} />

    </div>
  );
}

export default App;
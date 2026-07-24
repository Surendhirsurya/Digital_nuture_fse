import React from "react";

function CourseDetails(props) {

    if (!props.show) {
        return <h3>No Courses Available</h3>;
    }

    const courses = [

        {
            id: 1,
            name: "React JS",
            duration: "45 Days"
        },
        {
            id: 2,
            name: "Spring Boot",
            duration: "60 Days"
        },
        {
            id: 3,
            name: "Angular",
            duration: "50 Days"
        }

    ];

    return (

        <div className="box">

            <h2>Course Details</h2>

            {

                courses.map(course => (

                    <div key={course.id}>

                        <h4>{course.name}</h4>

                        <p>Duration : {course.duration}</p>

                        <hr />

                    </div>

                ))

            }

        </div>

    );
}

export default CourseDetails;
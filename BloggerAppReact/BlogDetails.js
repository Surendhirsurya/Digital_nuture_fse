import React from "react";

function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "React Hooks",
            content: "Hooks make functional components powerful."
        },
        {
            id: 2,
            title: "Spring Boot REST",
            content: "REST APIs using Spring Boot."
        }
    ];

    return (

        <div className="box">

            <h2>Blog Details</h2>

            {

                blogs.length > 0 ?

                    blogs.map(blog => (

                        <div key={blog.id}>

                            <h4>{blog.title}</h4>

                            <p>{blog.content}</p>

                            <hr />

                        </div>

                    ))

                    :

                    <h3>No Blogs Found</h3>

            }

        </div>

    );
}

export default BlogDetails;
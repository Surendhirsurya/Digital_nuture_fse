import React, { Component } from "react";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            error: null
        };
    }

    // Fetch posts from API
    loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                });
            })
            .catch(error => {
                this.setState({
                    error: error
                });
            });
    };

    // Called automatically after component loads
    componentDidMount() {
        this.loadPosts();
    }

    // Error handling
    componentDidCatch(error, info) {
        alert("Error: " + error);
        console.log(info);
    }

    render() {

        return (
            <div style={{ padding: "20px" }}>
                <h1>Blog Posts</h1>

                {
                    this.state.posts.map(post => (
                        <div key={post.id}
                             style={{
                                 border: "1px solid gray",
                                 padding: "15px",
                                 marginBottom: "15px",
                                 borderRadius: "8px"
                             }}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                }

            </div>
        );
    }
}

export default Posts;
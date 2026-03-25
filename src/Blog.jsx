import React from "react";
import "./Blog.css";

function Blog({ title, posts }) {
  return (
    <section className="Blog-section" id="Blog-Section">
      <h2 className="section-title">{title}</h2>
      <div className="posts">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <img
              loading="lazy"
              className="image"
              src={post.image}
              alt={post.alt}
            />
            <h3>{post.heading}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
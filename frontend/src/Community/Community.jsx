import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Community/Community.css";

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Navbar />
      <div className="crop6">
        <div className="crop7">
          <h1>Community & social development</h1>
          <p>Put your queries below</p>
        </div>
      </div>
      <div className="community1">
        <PostForm onNewPost={handleNewPost} />
      </div>
      <div className="community1">
        <PostList posts={posts} />
      </div>
      <Footer />
    </div>
  );
};

const PostForm = ({ onNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !type || !category) return;
    const newPost = {
      title,
      content,
      type,
      category,
      tags: tags.split(",").map((tag) => tag.trim()),
      author: "User",
    };
    onNewPost(newPost);
    setTitle("");
    setContent("");
    setType("");
    setCategory("");
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows="4"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="Farmer">Farmer</option>
        <option value="Developer">Developer</option>
        <option value="Guest">Guest</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Technology">Technology</option>
        <option value="General">General</option>
      </select>
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma separated)"
      />
      <button type="submit">Post</button>
    </form>
  );
};

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </ul>
  );
};

const PostItem = ({ post }) => {
  return (
    <div className="community2">
      <li>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>Type: {post.type}</p>
        <p>Category: {post.category}</p>
        <p>Tags: {post.tags.join(", ")}</p>
        <p>by: {post.author}</p>
      </li>
    </div>
  );
};

export default CommunityPage;

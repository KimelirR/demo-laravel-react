import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function Booklist() {
  // const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{console.log(post.body)}</p>
    </div>
  );
}

export default Booklist;
import React, { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Fake Posts</h2>
      <button onClick={fetchData}>Refresh</button>

      {posts.map(p => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

export default FakePostList;
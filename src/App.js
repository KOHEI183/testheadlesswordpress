import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { fetchPosts } from "./api";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 投稿を取得
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {posts.map((item) => {
          console.log(item.content.rendered, 1111);
          return (
            <>
              <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              <div
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;

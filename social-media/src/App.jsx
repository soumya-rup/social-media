import React, { useState } from "react";
import Header from "./component/Header";
import "./App.css";
import Side from "./component/Side";
import Create from "./component/Create";
import Feed from "./component/Feed";

function App() {
  const [current, setcurrent] = useState("home");
  const [posts, setPosts] = useState([]);
  const handelsetcreate = () => {
    setcurrent("Create");
  };
  const handelsethome = () => {
    setcurrent("home");
  };
  const handeldata = (name, con, id) => {
    const newArr = [...posts, { user: name, content: con, id: id }];
    setPosts(newArr);
  };
  const handeldel = (id) => {
    const newItem = posts.filter((item) => item.id !== id);
    setPosts(newItem);
  };
  return (
    <div className="App">
      <Header />
      <div className="home-page">
        <Side clickc={handelsetcreate} clickh={handelsethome} />
        {current === "home" ? (
          <Feed posts={posts} del={handeldel} />
        ) : (
          <Create click={handeldata} />
        )}
        {posts.length === 0 && (
          <div className="no-post">
            <h1>No Post</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

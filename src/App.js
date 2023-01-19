// React
import React from "react";
import {Route, Routes} from "react-router-dom";

// Common
import {UsersPage} from "./pages/usersPage/UsersPage";
import {PostsPage} from "./pages/postsPage/PostsPage";
import {DataRequest} from "./dataRequest/DataRequest";
import "./App.css";


function App() {
  {DataRequest()}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UsersPage/>}/>
        <Route path="/posts" element={<PostsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

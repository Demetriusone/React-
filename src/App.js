import React, {useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'JavaScript', body:'Description'},
        {id:2, title: 'React', body:'Description'},
        {id:3, title: 'Jquery', body:'Description'},

    ])
  return (
    <div className="App">
        <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}
export default App;

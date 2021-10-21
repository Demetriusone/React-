import React, {useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Uncontrolled from "./components/uncontrolled";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'JavaScript', body:'Description'},
        {id:2, title: 'React', body:'Description'},
        {id:3, title: 'Jquery', body:'Description'},
    ])
    const [title,setTitle] = useState('')
    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title)

    }
  return (
    <div className="App">
        <form>
            {/* Управляемый компонент */}
            <MyInput
                value={title}
                type="text"
                onChange={e => setTitle(e.target.value)}
                placeholder="Название поста"
            />
            <MyInput type="text" placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}> Создать пост</MyButton>
        </form>
        <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}
export default App;

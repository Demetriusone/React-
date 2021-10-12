import React, {useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
function App() {
    const [likes, setlikes] = useState(5);
    const [value, setValue] = useState('input text')
    console.log(likes);
    console.log(setlikes);

  return (
    <div className="App">
        <Counter/>
        <ClassCounter/>
    </div>
  );
}
export default App;

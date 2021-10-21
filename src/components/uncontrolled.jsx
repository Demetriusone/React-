import React, {useRef} from "react";

const Uncontrolled = () => {
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    };
    return(
        <form>
            <input type="text" ref={inputRef}/>
            <button onClick={handleSubmit}>Submit</button>

        </form>
    )
}
export default Uncontrolled;
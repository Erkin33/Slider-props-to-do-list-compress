import { useState } from "react";

function Clicker(){
    const [count, setcount] = useState(4)
    function mines(){
        setcount(count - 1)
    }
    function plus(){
        setcount(count + 1)
    }
    return(
        <>
        <button onClick={mines}>-</button>
        <p>{count}</p>
        <button onClick={plus}>+</button>
        </>
    )
}
export default Clicker;
import {useState} from "react";

export default Counter;
function Counter({name, age}) {
    const [count, setCount] = useState(0);
    console.log(name);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            {name} a cliqué {count} fois
        </button>

  );
}
import { useEffect,useState } from 'react'
import "./Adivce.css";

export const Adivce = () => {
    const [advice, setAdvice] = useState("Please Click Button to Get Advice");
    const [count,setCount] = useState(0);
    async function getAdivce() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

useEffect(function(){
    getAdivce();
}, [])

    return (
        <div>
            <h3>{advice}</h3>
            <button onClick={getAdivce}>Get Advice</button>
            <p>You have read <b> {count} </b>Pieces of advice</p>
        </div>
    )
}

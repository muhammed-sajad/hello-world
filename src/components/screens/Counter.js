import React , { useState , useEffect} from 'react'

function Counter() {
    const num = 0;
    const [count,setCount] = useState(num)
    const [name,setName] = useState("")
    const increment = () => {
        setCount((prevState)=>prevState + 1)
    }
    useEffect(()=> {
        console.log("hello")
        document.title = `count is ${count}`
    },[count])
    useEffect(()=> {
        console.log("name")
    },[name])
    useEffect(()=> {
        console.log("componentDidMount")
    },[])
    return (
        <div>
            <input value={name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={()=> increment()}>increment : {count} </button>
            <p>{count}</p>
        </div>
    )
}

export default Counter
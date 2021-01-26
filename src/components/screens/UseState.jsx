import React, {useState} from 'react'

function UseState() {
    let count = 0;
    const [num,setNum] = useState(count);
    // let increment = ()=> {
    //     for (let i=0; i<3; i++)
    //     {
    //         setNum((prevState)=>prevState+1);
    //     }
    // };
    return (
        <div>
            <p onClick={() => setNum((prevState)=>prevState+1)}>{num}</p>
            {/* <button onClick={increment()}>+</button> } */}
        </div>
    )
};

export default UseState;

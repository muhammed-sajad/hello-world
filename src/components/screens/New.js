import React , { useState }from 'react'
import Styles from 'styled-components'
import pic from './../../assets/images/camara.jpeg'

function New() {
    const [value] = useState([
        {
            id:1,
            name: "sree",
            image: require("./../../assets/images/camara.jpeg").default,
            dob:1999
        },
        {
            id:2,
            name: "joe",
            image: require("./../../assets/images/see.svg").default,
            dob:1998
        },
        {
            id:3,
            name: "see",
            image: pic,
            dob:1999
        },
        {
            id:4,
            name: "ojue",
            image: pic,
            dob:1997
        }
    ])
    return (
        <div>

            <Image src={require("../../assets/images/camara.jpeg").default} alt="Image" />
            <br />
            <Image src={"https://images.unsplash.com/photo-1459802071246-377c0346da93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=652&q=80"} width="300px" alt="image"/>
            <Div>
                {value.map((data) =>
                    <div key={data.id}>
                        <p> {data.id} {data.name}</p>
                        <Image src={data.image}/>
                        <p>{data.dob}</p>
                    </div>
                )}
            </Div>
        </div>
    )
}

export default New;

const Image = Styles.img`
    width: 300px;
    height: 300px;
`
const Div = Styles.div`
    display: flex;
    justify-content: space-between; 
`

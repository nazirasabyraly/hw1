import React, { useState } from 'react'

export default function UserCard (props) {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount((count) => count + 1)
    }

    return (
        <div style={{border: "1px solid", padding: "10px"}}>
            <h2>{props.name}</h2>
            <p>
                Age: {props.age}
            </p>
        </div>
    )
}
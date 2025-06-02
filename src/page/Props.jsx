import React, { useState } from 'react'
import UserCard from './components/UserCard'

function NameInput() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNameSubmit(name);
    };

    return (
        <form onSubmit ={handleSubmit}>
            <label>
                Write your name here 
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                />
            </label>
            <button type="submit">Send</button>
        </form>
    );
}
export default NameInput;
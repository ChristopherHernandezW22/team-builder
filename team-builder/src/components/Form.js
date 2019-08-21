import React, { useState } from 'react';

const Form = (props) => {
    const [person, setPerson] = useState({name: "", email: "", role: ""});
    const handleChange = event => {
        setPerson({...person, [event.target.name]: event.target.value})
    };
    return (
        <form>
            <input  placeholder="name"
                    value={person.name}
                    name="name"
                    onChange={handleChange}
                    />
            <input  placeholder="email"
                    value={person.email}
                    name="email"
                    onChange={handleChange}
                    />
            <input  placeholder="role"
                    value={person.role}
                    name="role"
                    onChange={handleChange}
                    />
            <button type="submit">Add Person</button>
        </form>
    );
};

export default Form;
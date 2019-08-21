import React from 'react';

// { name: "", email: "", role: "" }

const Card = (props) => {
    // Two ways to this, shown in line 7 & 8
    // const person = props.person;
    const { person } = props;
    return (
        <div>
            <div>{person.name}</div>
            <div>{person.email}</div>
            <div>{person.role}</div>
        </div>
    );
};

export default Card;
import React, { useState } from "react";
import styled from "styled-components";

export const ContactForm = () => {
    // empty string will be updated w user data
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        phoneNum: ""
    });

    // form onSubmit
    const handleAddContact = (e) => {
        e.preventDefault();
        console.log('pressed')
    };

    // track input value
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, ' n a m e ');
        console.log(value, ' v a l u e ')

        setContactInfo({ ...contactInfo, [name]: value })
    };

    return (
        <>
            <Form onSubmit={handleAddContact}>
                <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={contactInfo.firstName}
                    onChange={handleInput} />
                <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={contactInfo.lastName}
                    onChange={handleInput} />
                <Input
                    type="text"
                    name="phoneNum"
                    placeholder="Phone Number"
                    value={contactInfo.phoneNum}
                    onChange={handleInput} />
                <AddBtn>Add Contact</AddBtn>
            </Form>
        </>
    )
};

const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
padding-top: 5%;
`;

const Input = styled.input`
margin-top: 2%;
border-radius: 8px;
height: 25px;
width: 45%;
`

const AddBtn = styled.button`
margin-top: 2%;
border-radius: 8px;
height: 30px;
color: white;
background-color: darkslategrey;
`
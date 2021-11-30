import React, { useState } from "react";
import styled from "styled-components";

export const ContactForm = () => {
    // empty string will be updated w user data
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: ""
    });

    // track input value and set input data to state contactInfo
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContactInfo({ ...contactInfo, [name]: value });
    };

    // form onSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/contact/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactInfo)
        });
        console.log(response)

        const data = await response.json();
        if (data.status === 200) {
            setContactInfo({
                firstName: "",
                lastName: "",
                phoneNum: "",
                email: ""
            });
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={contactInfo.firstName}
                    onChange={handleInput}>
                </Input>
                <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={contactInfo.lastName}
                    onChange={handleInput}>
                </Input>
                <Input
                    type="tel"
                    name="phoneNum"
                    placeholder="Phone Number"
                    value={contactInfo.phoneNum}
                    onChange={handleInput}>
                </Input>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={contactInfo.email}
                    onChange={handleInput}>
                </Input>
                <AddBtn>Add Contact</AddBtn>
            </Form>
        </>
    )
};

const Form = styled.form`
display: flex;
display: inline-block;
flex-direction: column;
justify-content: center;
align-items: center;
width: 55%;
padding-top: 3%;
`;

const Input = styled.input`
margin-top: 8%;
border-radius: 8px;
height: 25px;
width: 100%;
`

const AddBtn = styled.button`
margin-top: 8%;
border-radius: 8px;
height: 35px;
width: 110px;
color: white;
background-color: darkslategrey;
`
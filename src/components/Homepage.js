import React, { useState } from "react";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { ContactForm } from "./ContactForm";

export const Homepage = () => {
    const [showForm, setShowForm] = useState(false);

    // add new contact onClick button
    const handleNewContact = () => setShowForm(!showForm);

    return (
        <>
            <Container>
                <HeaderContainer>
                    <Header>Phone Book</Header>
                </HeaderContainer>
                <AddBtnSearchContainer>
                    <AddNewBtn onClick={handleNewContact}>+</AddNewBtn>
                </AddBtnSearchContainer>
                {showForm ? <ContactForm />
                    : (
                        <SearchBarContainer>
                            <SearchBar />
                        </SearchBarContainer>
                    )
                }
            </Container>
        </>
    )
};

const Container = styled.div`
width: 500px;
height: 500px;
border: 3px solid grey;
border-radius: 10px;
`;

const Header = styled.h1`
color: darkslategrey;
`;

const HeaderContainer = styled.div`
display: flex;
justify-content: center;
`;

const AddBtnSearchContainer = styled.div`
display: flex;
justify-content: center;

`

const AddNewBtn = styled.button`
height: 30px;
width: 30px;
border-radius: 8px;
color: white;
background-color: darkslategrey;
`;

const SearchBarContainer = styled.div`
width: 80%;
`;

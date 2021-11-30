import React, { useState } from "react";
import styled from "styled-components";

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState([]);
    const [value, setValue] = useState("");

    return (
        <>
            <Container>
                <SearchInput
                    type="text"
                    placeholder="Search Contacts"
                    onChange={(e) => setValue(e.target.value)}
                />
                <ClearBtn onClick={() => setValue("")}>Clear</ClearBtn>
            </Container>
        </>
    )
};

const Container = styled.div`
display: flex;
justify-content: center;
`;

const SearchInput = styled.input`
width: 75%;
height: 30px;
border-radius: 10px;
`;

const ClearBtn = styled.button`
height: 35px;
width: 70px;
margin-left: 5px;
border-radius: 8px;
color: white;
background-color: darkslategrey;
`;
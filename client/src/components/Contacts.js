import React, { useEffect, useState } from "react";
import styled from "styled-components";
import friends from '../Images/friends.jpeg'

export const Contacts = () => {
    const [contact, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getContacts = async () => {
            const response = await fetch("/contact")
            const data = await response.json();
            setContacts(data.data)

        }
        getContacts();
    }, []);

    console.log(contact, ' this iscocntaft')

    return (
        <>
            <ContactContainer>
                {contact.length < 1 ? (
                    <>
                        <h3>Add contacts and they will be listed below.</h3>
                        <FriendsImg src={friends} />
                    </>
                ) :
                    // <>
                    // <h2>Contacts</h2>
                    // </>
                    contact.map((info) => {
                        return (
                            <ContactInfo key={info.id}>
                                <Contact>
                                    <Name>{info.firstName}{" "}{info.lastName}{" "}<EditBtn>edit</EditBtn></Name>
                                    <PhoneNum>{info.phoneNum}</PhoneNum>
                                    <Email>{info.email}</Email>
                                </Contact>
                            </ContactInfo>
                        )
                    })}
            </ContactContainer>
        </>
    )
};

const ContactContainer = styled.div`
    width: 100%;
`;

const ContactInfo = styled.div`
    width: 180px;
    display: inline-block;
    margin: 1px;
    /* float: right; */
`;

const Contact = styled.div`
    display: flex;
    height: 80px;
    flex-direction: column;
    border: 2px solid yellowgreen;
    border-radius: 10px;
    flex: wrap;
`

const Name = styled.span`
    margin: 3px;
    font-weight: bold;
`;

const PhoneNum = styled.span`
    margin: 3px;
`;

const Email = styled.span`
    margin: 3px;
`;

const EditBtn = styled.button`
width: 42px;
height: 25x;
border-radius: 8px;
color: white;
background-color: darkslategrey;
`;

const FriendsImg = styled.img`
width: 300px;
height: 250px;
`;
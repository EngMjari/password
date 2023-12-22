import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.div`
text-align : center;
background-color: #3c6382 !important ;
position:fixed;
bottom:0;
right : 0;
width:100%;
color:#38ada9;
padding : 10px 0 ;
`

const MailLink = styled.a`
color : #38ada9;
text-decoration: none !important;
transition: 200ms;
&:hover {
    font-size: 1.2rem;
    font-weight : 600;
    color: #82ccdd;
}
`

const Footer = () => {
    return (
        <MyFooter>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <MailLink href='mailto:mohammad.jarii@gmail.com'>
                Mohammad Jari
            </MailLink>
        </MyFooter>
    );
}

export default Footer;

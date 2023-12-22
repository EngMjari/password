import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './profile.jpeg';
import { Image } from 'react-bootstrap';
import Whatsapp from './Icon/whatsapp.png';
import Email from './Icon/email.png';
import Instagram from './Icon/instagram.png';
import Telegram from './Icon/telegram.png';
import styled from "styled-components";

const ProfilePic = styled(Image)`
height: 80px!important;
&:hover {
transition: 400ms;
transform:scale(1.2);

}
`
const Contact = styled(Image)`
height: 40px!important;
&:hover {
transition: 400ms;
transform:scale(1.3);

}
`

const Title = styled(Navbar.Brand)`
font-weight: 600;
font-size:1.3rem;
font-family:'Times New Roman', Times, serif;
color:#f1f2f6;
cursor: default;
`
const MyNavbar = styled(Navbar)`
background-color: #3c6382 !important ;
`

const Navigation = (props) => {
    return (
        <MyNavbar>
            <Container>
                <Title>
                    {props.title}
                </Title>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link target='_blank' href="mailto://mohammad.jarii@gmail.com">
                            <Contact height={40} src={Email} />
                        </Nav.Link>
                        <Nav.Link target='_blank' href="https://wa.me/989350500406">
                            <Contact height={40} src={Whatsapp} />
                        </Nav.Link>
                        <Nav.Link target='_blank' href="https://t.me/Mohamad_jari">
                            <Contact height={40} src={Telegram} />
                        </Nav.Link>
                        <Nav.Link target='_blank' href="https://www.instagram.com/mohammad_jari">
                            <Contact height={40} src={Instagram} />
                        </Nav.Link>

                    </Nav>
                    <Nav className="mr-auto d-none d-lg-block">
                        <ProfilePic thumbnail roundedCircle height={50} src={Profile} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </MyNavbar>
    );
}

export default Navigation;

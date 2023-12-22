import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Wrapper = styled(Container)`
    text-align : center!important;
    padding : 30px 0;
`

const PassView = styled(FontAwesomeIcon)`
cursor: pointer;
&:hover {
    
}
`
const Password = () => {
    const [password, setPassword] = useState("password")

    return (
        <Wrapper>
            <InputGroup>
                <InputGroup.Text id="PasswordInput">Password</InputGroup.Text>
                <Form.Control type={password} id='PasswordInput' />
                <InputGroup.Text>
                    <PassView onTouchStart={() => password === "password" ? setPassword('text') : setPassword("password")} onMouseDown={() => setPassword("text")} onMouseUp={() => setPassword('password')} onMouseLeave={() => setPassword('password')} icon={faEye} />
                </InputGroup.Text>

            </InputGroup>
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text>
        </Wrapper>
    );
}

export default Password;

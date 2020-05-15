import React, { useState } from "react"
import { Collapse, CardBody, Button, Card } from 'reactstrap';
import Login from "./Login"
import Register from "./Register"
import "./Login.css"
import { MDBBtn } from "mdbreact";

export const Auth = ({toggle}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggler = () => setIsOpen(!isOpen);

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const togglerLogin = () => setIsLoginOpen(!isLoginOpen);



    return (
        <>
            <div className="mainContainer">
                <div className="imgContainer"></div>
                <div className="authContainer">
                    <h1 className="welcome">Feel Your Heart With Art</h1>
                    <Button className="LoginButton" color="secondary" onClick={togglerLogin} style={{ marginBottom: '1rem' }}>Login</Button>
                    <Collapse isOpen={isLoginOpen}>
                        <Card>
                            <CardBody>
                                <Login toggle={toggle} />
                            </CardBody>
                        </Card>
                    </Collapse>

                    <MDBBtn gradient="purple" className="SignUpButton"  onClick={toggler} style={{ marginBottom: '1rem' }}>Sign-up</MDBBtn>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>
                                <Register toggle={toggle} />
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
        </>
    )
}
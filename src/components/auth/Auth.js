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
                    <h1 className="welcome">LISTEN TO YOUR HE<b>ART</b></h1>
                    <medium className="welcome">Customize Your Own Feeling Chart</medium>
                    <MDBBtn className="LoginButton" color="btn aqua-gradient" onClick={togglerLogin} style={{ marginBottom: '1rem' }}>Login</MDBBtn>
                    <Collapse isOpen={isLoginOpen}>
                        <Card>
                            <CardBody className="authCard">
                                <Login toggle={toggle} />
                            </CardBody>
                        </Card>
                    </Collapse>

                    <MDBBtn gradient="purple" className="SignUpButton"  onClick={toggler} style={{ marginBottom: '1rem' }}>Sign-up</MDBBtn>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody className="authCard">
                                <Register toggle={toggle} />
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
        </>
    )
}
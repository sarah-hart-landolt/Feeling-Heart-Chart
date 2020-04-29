import React from "react"
import Login from "./Login"
import Register from "./Register"

export const Auth = ({toggle}) => {
    return (
        <>
            <h1 className="welcome">Feel Your Heart With Art</h1>
            <div className="authContainer">
                <Login toggle={toggle} />
                <Register toggle={toggle} />
            </div>
        </>
    )
}
import React, { useState } from "react"
// import {Dashboard} from "./Dashboard"
import {Auth} from "./auth/Auth"

export const FeelingHeart = () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
         <Auth toggle={toggle} />
    )
}

// localStorage.getItem("feelingHeart_customer") ? <Dashboard />
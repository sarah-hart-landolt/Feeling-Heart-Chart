import React, { useState } from "react"
import {Dashboard} from "./Dashboard"
import {Auth} from "./auth/Auth"
import { UserProvider } from "./auth/UserProvider"

export const FeelingHeart = () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)


    return (
    
        localStorage.getItem("feelingHeart_customer") ? <UserProvider><Dashboard /></UserProvider> : <Auth toggle={toggle} />

    
    )
   
 
}

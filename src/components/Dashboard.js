import React, { useState, useEffect, useContext } from "react"
import "./Dashboard.css"
import { Homepage } from "./Homepage"
import { FHChartList } from "./customizeCharts/FHChartList"
import { EmotionProvider } from "./images/ImageProvider"
import { UserContext } from "./auth/UserProvider"



export const Dashboard = () => {
    const [activeList, setActiveList] = useState("homepage_view")
    const [components, setComponents] = useState()
    const { users } = useContext(UserContext)
    let activeUserID = parseInt(localStorage.getItem("feelingHeart_customer"))
    const activeUser= users.find(user=> user.id ===activeUserID) || {}
    
    const showHomepage= () => (
        <Homepage setActiveList={setActiveList}/>
    )

    const showFHChartList= () => (
        <FHChartList />
    )

    useEffect(() => {
        if (activeList === "homepage_view") {
            setComponents(showHomepage)
        }
        else if (activeList === "FHChartList") {
            setComponents(showFHChartList)
        }
        
    }, [activeList])

    return  (
    <>
        <div className="mainContainer">
             <div className="dashboardContainer">
             {showHomepage}
             {showFHChartList}
            </div>
           
        </div>
        <h1>How are you feeling today, {activeUser.firstName}?</h1>
        <small>your feelings are valid.</small>
        <div className="listContainer">
            <div className="links">
                <div className="fakeLink href" onClick={() => setActiveList("homepage_view")}>HomePage</div>
                <div className="fakeLink href" onClick={() => setActiveList("FHChartList")}>Make New Chart</div>
            </div>
            <div className="listDisplay">
            <EmotionProvider>
                 {components}
            </EmotionProvider>
                       
            </div>
        </div>
    </>
    )

}

import React, { useState, useEffect, useContext } from "react"
import "./Dashboard.css"
import { Homepage } from "./Homepage"
import { FHChartList } from "./customizeCharts/FHChartList"
import { EmotionProvider } from "./customizeCharts/EmotionProvider"
import { UserContext } from "./auth/UserProvider"
import { ImageProvider } from "./images/ImageProvider"
import { SavedChartImageProvider } from "./savedCharts/SavedChartImageProvider"
import { SavedChartProvider } from "./savedCharts/SavedChartProvider"



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
    // <ImageProvider>
        <FHChartList />
    //  </ImageProvider>
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
             <EmotionProvider>
                <ImageProvider>
             {showHomepage}
             {showFHChartList}
             </ImageProvider>
            </EmotionProvider>
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
            <ImageProvider>
             <EmotionProvider>
                    <SavedChartImageProvider>   
                        <SavedChartProvider>
                     {components}
                       </SavedChartProvider>
                    </SavedChartImageProvider>
            </EmotionProvider>
            </ImageProvider>
           

                       
            </div>
        </div>
    </>
    )

}

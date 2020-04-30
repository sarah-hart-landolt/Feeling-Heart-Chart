import React, { useState, useEffect } from "react"
import "./Dashboard.css"
import { Homepage } from "./Homepage"
import { FHChartList } from "./customizeCharts/FHChartList"

export const Dashboard = () => {
    const [activeList, setActiveList] = useState("homepage_view")
    const [components, setComponents] = useState()

    const showHomepage= () => (
        <Homepage />
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
             <div className="searchContainer">
             {showHomepage}
             {showFHChartList}
            </div>
        </div>
        <h1>How are you feeling today {localStorage.getItem("feelingHeart_customer")}?</h1>
        <small>your feelings are valid.</small>
        <div className="listContainer">
            <div className="links">
                <div className="fakeLink href" onClick={() => setActiveList("homepage_view")}>HomePage</div>
                <div className="fakeLink href" onClick={() => setActiveList("FHChartList")}>Make New Chart</div>
            </div>
            <div className="listDisplay">
                 {components}
            </div>
        </div>
    </>
    )

}

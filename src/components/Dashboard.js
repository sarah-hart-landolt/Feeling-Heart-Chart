import React, { useState, useEffect } from "react"
import "./Dashboard.css"
import { Homepage } from "./Homepage"
import { FHChartList } from "./customizeCharts/FHChartList"
import { EmotionProvider } from "./customizeCharts/EmotionProvider"
import { ImageProvider } from "./images/ImageProvider"
import { SavedChartImageProvider } from "./savedCharts/SavedChartImageProvider"
import { SavedChartProvider } from "./savedCharts/SavedChartProvider"
import { NavBar } from "./nav/NavBar"
import { ShoppingCartProvider } from "./cart/ShoppingCartProvider"


export const Dashboard = ({ logout }) => {
    const [activeList, setActiveList] = useState("homepage_view")
    const [components, setComponents] = useState()

    const showHomepage = () => (
        <Homepage setActiveList={setActiveList} />
    )

    const showFHChartList = () => (
        <FHChartList setActiveList={setActiveList} />
    )

    useEffect(() => {
        if (activeList === "homepage_view") {
            setComponents(showHomepage)
        }
        else if (activeList === "FHChartList") {
            setComponents(showFHChartList)
        }

    }, [activeList])

    return (
        <>
        
            <EmotionProvider>
                <ImageProvider>
                    <SavedChartImageProvider>
                        <SavedChartProvider>
                            <ShoppingCartProvider>
                            
                            <div className="mainContainer">
                                <div className="dashboardContainer">
                                    {showHomepage}
                                    {showFHChartList}
                                    <div className="navBar">
                                    <NavBar setActiveList={setActiveList} logout={logout} />
                                    </div>
                                </div>

                            </div>

                            <div className="listContainer">
                                <div className="listDisplay">

                                    {components}



                                </div>
                            </div>
                            </ShoppingCartProvider>
                        </SavedChartProvider>
                    </SavedChartImageProvider>
                </ImageProvider>
            </EmotionProvider>
            
        </>
    )

}

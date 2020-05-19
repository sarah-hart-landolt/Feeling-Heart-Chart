import React, { useContext } from "react"
import { MakeFHChartPreviewList } from "./customizeCharts/MakeFHChartPreview"
import { SavedChartList } from "./savedCharts/SavedChartList"
import { UserContext } from "./auth/UserProvider"
import { CarouselPage } from "./auth/CarouselPage"
import "./Dashboard.css"


export const Homepage = (props) => {
    const { users } = useContext(UserContext)
    let activeUserID = parseInt(localStorage.getItem("feelingHeart_customer"))
    const activeUser = users.find(user => user.id === activeUserID) || {}

    return (
        <>
            <article className="homepage_view">
                <div className="welcomeMessage"><h1>How are you feeling today, {activeUser.firstName}?</h1>
                    <small>your feelings are valid.</small></div>
                <div className="homepage_slides" ><CarouselPage /></div>
                <div className="homepage_charts">
                    <div><MakeFHChartPreviewList setActiveList={props.setActiveList} /></div>
                    <div><SavedChartList setActiveList={props.setActiveList} /></div>
                    
                </div>
        </article>
    </>
   )

}
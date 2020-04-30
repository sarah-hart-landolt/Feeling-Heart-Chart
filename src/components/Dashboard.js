import React from "react"
import { MakeFHChartPreviewList } from "./customizeCharts/MakeFHChartPreview"
import { SavedChartList } from "./savedCharts/SavedChartList"
import "./Dashboard.css"

export const Dashboard = () => (
    <>
        <h1>How are you feeling today {localStorage.getItem("feelingHeart_customer")}?</h1>
        <small>your feelings are valid.</small>
        <article className="homepage_view">
            <div> <SavedChartList /></div>
            <div><MakeFHChartPreviewList /></div>
        </article>
    </>
)
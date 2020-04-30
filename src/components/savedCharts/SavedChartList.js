import React from "react"
import "./savedCharts.css"
import SavedChartCard from "./SavedChartCard"

export const SavedChartList = () => {

    return (
     <>
        <h2>My Saved Charts</h2>
        
        <div className="savedChartsList">
            <SavedChartCard />
        </div>
     </>
    )
}
import React, {useContext} from "react"
import "./savedCharts.css"
import { SavedChartCard } from "./SavedChartCard"
import { SavedChartContext } from "./SavedChartProvider"

export const SavedChartList = () => {
    const { savedCharts }= useContext(SavedChartContext)
    const filteredSavedCharts= savedCharts.filter(savedChart => savedChart.name != "" ) || {}
    const foundSavedCharts = filteredSavedCharts.filter(filteredSavedChart=>filteredSavedChart.userId === parseInt(localStorage.getItem("feelingHeart_customer")) ) || {}


    return (
     <> <article className="savedChartsList">
        <h2>My Saved Charts</h2>
        <br></br>
            <div>
            {
                foundSavedCharts.map(foundSavedChart => <SavedChartCard key={foundSavedChart.id} foundSavedChart={foundSavedChart} />)
            }
            </div>
        </article>
     </>
    )
}
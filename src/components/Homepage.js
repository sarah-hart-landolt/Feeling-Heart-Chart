import React from "react"
import { MakeFHChartPreviewList } from "./customizeCharts/MakeFHChartPreview"
import { SavedChartList } from "./savedCharts/SavedChartList"

export const Homepage = () => (

    <>
        <article className="homepage_view">
            <div> <SavedChartList /></div>
            <div><MakeFHChartPreviewList /></div>
        </article>
    </>

)
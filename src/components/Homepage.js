import React from "react"
import { MakeFHChartPreviewList } from "./customizeCharts/MakeFHChartPreview"
import { SavedChartList } from "./savedCharts/SavedChartList"

export const Homepage = (props) => (

    <>
        <article className="homepage_view">
            <div> <SavedChartList /></div>
            <div><MakeFHChartPreviewList setActiveList={props.setActiveList}/></div>
        </article>
    </>

)
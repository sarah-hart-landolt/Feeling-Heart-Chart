import React from "react"
import "./FHChartList.css"

export const EmotionCard = ({ emotion }) => ( 
    <section className="emotion">
        <h3 className="emotion__name">{emotion.emotion}</h3>
    </section>

)

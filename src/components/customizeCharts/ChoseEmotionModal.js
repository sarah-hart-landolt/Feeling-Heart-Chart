import React from "react"
import "./FHChartList.css"

export const ChooseEmotionModal = ({ imageArray }) => ( 
    // <section className="emotion">
   <div>{imageArray.map(imageObject=>{ return <h3 className="emotion__image">${imageObject.url}</h3> })}</div> 
    // </section>

)

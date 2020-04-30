import React, { useState } from "react"
import { Button } from "reactstrap"
import feelingheart from "../auth/feelingheart.png"
import  "./MakeFHChartPreview.css"
import { FHChartList } from "./FHChartList"


export const MakeFHChartPreviewList = (props) => {

    return (
        <>
            <article className="MakeFHChartPreview">
            <h2>Make your own Feeling Chart !</h2>
            <img className="feelingHeart_img" src={feelingheart} />
            <Button onClick={()=> props.setActiveList("FHChartList")}>Make Chart</Button>
            </article>
        </>
    )
    }

import React, { useContext } from "react"
import { Button } from "reactstrap"
import { EmotionContext } from "../images/ImageProvider"
import { EmotionCard } from "./EmotionCard"
import "./FHChartList.css"

export const FHChartList = () => {

    // const toggle = () => setModal(!modal)
    const { emotions } = useContext(EmotionContext)


    return (
        <>
            <article className="FHChartList">
            <h2>Feeling Heart</h2>
            <div className="emotions">
        {
            emotions.map(emo => <EmotionCard key={emo.id} emotion={emo} />)
        }
             </div>
            <Button>Save Chart</Button>
            </article>

        </>
    )
    }
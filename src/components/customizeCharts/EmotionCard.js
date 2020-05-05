import React from "react"
import "./FHChartList.css"

export const EmotionCard = ({ emotion, foundImage }) => {
        if (foundImage.hasOwnProperty("emotionId")) {
            return (
              <section className="emotion">
              <div><img class="emotionImage" src={`${foundImage.url}`}/></div>
              <div>{emotion.emotion}</div>
              </section>
            )
        } else {
          return (
            <section className="emotion">
            <h3 className="emotion__name">Click to Choose Your {`${emotion.emotion}`}</h3>
            <div>{emotion.emotion}</div>
            </section>
          )
        }
  }
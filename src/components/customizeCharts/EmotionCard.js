import React from "react"
import "./FHChartList.css"

export const EmotionCard = ({ emotion, foundImage }) => {
        if (foundImage.hasOwnProperty("emotionId")) {
            return (
              <section className="emotion">
                <div><img class="emotion__imageView" src={`${foundImage.url}`}/></div>
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


export const EditEmotionCard = ({ emotion, finalFoundImage }) => {
          if (finalFoundImage.hasOwnProperty("emotionId")) {
            return (
              <section className="emotion">
                <div><img class="emotion__imageView" src={`${finalFoundImage.url}`}/></div>
                <div>{emotion.emotion}</div>
              </section>
            )
        // } else if (finalChartImages.hasOwnProperty("emotionId")) {
        //   return (
        //     <section className="emotion">
        //       {
        //           finalChartImages.map(finalChartImageObject => {
        //               return <div><img className="emotion__imageView" src={`${finalChartImageObject.url}`} /> </div>
        //           }) ||{}
        //       } 
        //       <div>{emotion.emotion}</div>
        //     </section>
        //   )
        } else {
          return (
            <section className="emotion">
              <h3 className="emotion__name">Click to Choose Your {`${emotion.emotion}`}</h3>
              <div>{emotion.emotion}</div>
            </section>
          )}
  }
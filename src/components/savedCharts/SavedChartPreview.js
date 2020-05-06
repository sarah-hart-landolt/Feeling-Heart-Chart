import React, { useContext } from "react"
import "./savedCharts.css"
import { ImageContext } from "../images/ImageProvider"
import { EmotionContext } from "../customizeCharts/EmotionProvider"

export const SavedChartPreview = ({fSCI}) => {
const { images } = useContext(ImageContext)
const { emotions } = useContext(EmotionContext)
const finalChartImage= images.find(img=> img.id ===fSCI.imageId) || {}
const correctEmotion = emotions.find (emo=> emo.id ===finalChartImage.emotionId) || {}

    return (
     <>
        
        <section className="savedChartPreviewImages">
            <div classname= "savedPreviewImages__box"><img className="savedChartPreviewImages__image" src={`${finalChartImage.url}`}/></div>
            <div className="savedChartPreview__emotionName">{correctEmotion.emotion}</div>              
        </section>
     </>
    )
}
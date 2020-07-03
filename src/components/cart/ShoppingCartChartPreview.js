import React, { useContext } from "react"
import "../savedCharts/savedCharts.css"
import { ImageContext } from "../images/ImageProvider"
import { EmotionContext } from "../customizeCharts/EmotionProvider"

export const ShoppingCartChartPreview = ({ fSCI }) => {
    const { images } = useContext(ImageContext)
    const { emotions } = useContext(EmotionContext)
    const finalChartImage = images.find(img => img.id === fSCI.imageId) || {}
    const correctEmotion = emotions.find(emo => emo.id === finalChartImage.emotionId) || {}

    return (
        <>

            <article className="savedChartPreviewImages">
                <div classname="savedPreviewImages__box"><img className="savedChartPreviewImages__ShoppingCart" src={`${finalChartImage.url}`} /></div>
                <div className="savedChartPreview__ShoppingCartEmotionName">{correctEmotion.emotion}</div>
            </article>
        </>
    )
}
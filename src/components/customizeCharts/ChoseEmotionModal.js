import React, { useContext, useState } from "react"
import { Button } from "reactstrap"
import "./FHChartList.css"
import { ImageContext } from "../images/ImageProvider"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"
import { SavedChartContext } from "../savedCharts/SavedChartProvider"



export const ChooseEmotionModal = ({ emotion, toggler }) => {

    const { addSavedChartImage } = useContext(SavedChartImageContext)
    const { images } = useContext(ImageContext)
    const imageArray = images.filter(img => img.emotionId === emotion.id) || {}
    const {newSavedChart} = useContext(SavedChartContext)
    // const {emotions} = useContext(EmotionContext)

    const savePaintingRelationship = (imageObject) => {
        // const foundEmotion = emotions.find(emo=> emo.id === imageObject.emotionId)
        const newSavedChartImage = {
            imageId: imageObject.id,
            emotionId: imageObject.emotionId,
            savedChartId: newSavedChart.id

        }       
        
        // Need the id of the emotion the user selected

        // Need the id of the painting the user selected

        // Do a POST operation to the API to save the relationship
        addSavedChartImage(newSavedChartImage)

    }

    return (
        <>
            <h3>Chose a painting for your "{emotion.emotion}"</h3>
            <section className="emotion__image">
                {
                    imageArray.map(imageObject => {
                        return <div><img className="emotionImage" src={`${imageObject.url}`} />
                        <br></br>
                        <Button onClick={()=>{
                            savePaintingRelationship(imageObject)
                            toggler()}}> {`${emotion.emotion} ${imageObject.id}`}</Button></div>
                    })
                }

            </section>
        </>
    )
}

// export const EditChooseEmotionModal = ({ emotion, toggler }) => {

//     const { updateSavedChartImage } = useContext(SavedChartImageContext)
//     const { images } = useContext(ImageContext)
//     const imageArray = images.filter(img => img.emotionId === emotion.id) || {}
//     const {newSavedCharts} = useContext(SavedChartContext)

//     const updatePaintingRelationship = (imageObject) => {
//         // const foundEmotion = emotions.find(emo=> emo.id === imageObject.emotionId)
//         const newSavedChartImage = {
//             imageId: imageObject.id,
//             emotionId: imageObject.emotionId,
//             savedChartId: newSavedCharts.id

//         }       
        
//         // Need the id of the emotion the user selected

//         // Need the id of the painting the user selected

//         // Do a POST operation to the API to save the relationship
//         updateSavedChartImage(newSavedChartImage)

//     }

//     return (
//         <>
//             <h3>Chose a painting for your "{emotion.emotion}"</h3>
//             <section className="emotion__image">
//                 {
//                     imageArray.map(imageObject => {
//                         return <div><img className="emotionImage" src={`${imageObject.url}`} />
//                         <br></br>
//                         <Button onClick={()=>{
//                             savePaintingRelationship(imageObject)
//                             toggler()}}> {`${emotion.emotion} ${imageObject.id}`}</Button></div>
//                     })
//                 }

//             </section>
//         </>
//     )
// }


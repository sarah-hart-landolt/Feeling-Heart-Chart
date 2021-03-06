import React, { useContext } from "react"
import { Button } from "reactstrap"
import "./FHChartList.css"
import { ImageContext } from "../images/ImageProvider"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"
import { SavedChartContext } from "../savedCharts/SavedChartProvider"


export const ChooseEmotionModal = ({ emotion, toggle, fdSavedChartImages }) => {

    const { addSavedChartImage, updateSavedChartImage } = useContext(SavedChartImageContext)
    const { images } = useContext(ImageContext)
    const imageArray = images.filter(img => img.emotionId === emotion.id) || {}
    const { newSavedChart } = useContext(SavedChartContext)
    const editRecentChartImage = fdSavedChartImages.find(filteredSavedChartImageObject => filteredSavedChartImageObject.emotionId === emotion.id) || {}



    const savePaintingRelationship = (imageObject) => {
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

    const updatePaintingRelationship = (updatedImageObject) => {
        // const foundEmotion = emotions.find(emo=> emo.id === imageObject.emotionId)
        const saveUpdatedChartImage = {
            id: editRecentChartImage.id,
            imageId: updatedImageObject.id,
            emotionId: updatedImageObject.emotionId,
            savedChartId: newSavedChart.id

        }

        // Need the id of the emotion the user selected

        // Need the id of the painting the user selected

        // Do a POST operation to the API to save the relationship
        updateSavedChartImage(saveUpdatedChartImage)


    }

    if (editRecentChartImage.hasOwnProperty("imageId")) {
        return (
            <>
                <h3>Chose for your "{emotion.emotion}"</h3>
                <section className="emotion__image">
                    {
                        imageArray.map(updatedImageObject => {
                            return <div><img className="emotionImage" src={`${updatedImageObject.url}`} />
                                <br></br>
                                <Button onClick={() => {
                                    updatePaintingRelationship(updatedImageObject)
                                    toggle()
                                }}> {`${emotion.emotion} ${updatedImageObject.id}`}</Button></div>
                        })
                    }

                </section>
            </>
        )
    } else {
        return (
            <>
                <h3>Which one for "{emotion.emotion}"?</h3>
                <section className="emotion__image">
                    {
                        imageArray.map(imageObject => {
                            return <div><img className="emotionImage" src={`${imageObject.url}`} />
                                <br></br>
                                <Button onClick={() => {
                                    savePaintingRelationship(imageObject)
                                    toggle()
                                }}> {`${emotion.emotion} ${imageObject.id}`}</Button></div>
                        })
                    }

                </section>
            </>
        )
    }
}


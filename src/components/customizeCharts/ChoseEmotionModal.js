import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import "./FHChartList.css"
import { ImageContext } from "../images/ImageProvider"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"



export const ChooseEmotionModal = ({ emotion, toggler, setSelectedEmotionPainting }) => {
    const [modal, setModal] = useState(false)

    const { addSavedChartImage } = useContext(SavedChartImageContext)
    const { images } = useContext(ImageContext)
    const imageArray = images.filter(img => img.emotionId === emotion.id)
    // const {emotions} = useContext(EmotionContext)

    const savePaintingRelationship = (imageObject) => {
        // const foundEmotion = emotions.find(emo=> emo.id === imageObject.emotionId)
        const newSavedChartImage = {
            imageId: imageObject.id,
            emotionId: imageObject.emotionId

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
                        return <div><img class="emotionImage" src={`${imageObject.url}`} />
                        <br></br>
                        <Button onClick={()=>{
                            savePaintingRelationship(imageObject)
                            toggler()}}> {`${emotion.emotion} ${imageObject.id}`}</Button></div>
                    })
                }
            {/* <Modal isOpen={modal} toggler={toggler}>
                <ModalHeader toggler={toggler}>
                </ModalHeader>
                <ModalBody>
                    <EmotionCard imageObject= {selectedEmotionPainting} />
                </ModalBody>
            </Modal> */}

            </section>
        </>
    )
}


import React, { useContext, useState, useRef } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { EditEmotionCard } from "./EmotionCard"
import { EditChooseEmotionModal } from "./EditChoseEmotionModal"
import "./FHChartList.css"
import { EmotionContext } from "./EmotionProvider"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"
import { ImageContext } from "../images/ImageProvider"
import { SavedChartContext } from "../savedCharts/SavedChartProvider"
import feelingheartText from "../images/feelingheartText.jpg"


export const EditFHChartList = ({ foundSavedChart }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)


    const { emotions } = useContext(EmotionContext)
    const { images } = useContext(ImageContext)
    const { savedChartImages } = useContext(SavedChartImageContext)
    const [selectedEmotion, setSelectedEmotion] = useState()
    const { newSavedCharts, updateSavedChart } = useContext(SavedChartContext)
    const chartName = useRef()
    const foundSavedChartImages = savedChartImages.filter(savedChartImage => savedChartImage.savedChartId === foundSavedChart.id) || {}
    const finalChartImages = foundSavedChartImages.map(fSCI => { return images.find(img => img.id === fSCI.imageId) }) || {}


    const editSavedChart = () => {

        if (chartName.current.value === "") {
            window.alert("Please name your chart")
        } else {
            console.log(newSavedCharts)
            updateSavedChart({
                id: foundSavedChart.id,
                name: chartName.current.value,
                userId: parseInt(localStorage.getItem("feelingHeart_customer")),
                timestamp: Date.now(),
                price: "$70",
            })
        }
    }


    return (
        <>
            <article className="FHChartList">
            <div className="imgContainer"><img className="feelingHeart_imgText" src={feelingheartText} /></div> 
                <div className="emotions">
                    {
                        emotions.map(emo => {
                            // Find if there are any saved images for this emotion
                            const filteredSavedChartImages = savedChartImages.filter(savedChImg => savedChImg.savedChartId === foundSavedChart.id) || {}
                            const savedChartImage = filteredSavedChartImages.find(filteredSavedChartImageObj => filteredSavedChartImageObj.emotionId === emo.id) || {}
                            const finalFoundImage = images.find(image => image.id === savedChartImage.imageId) || {}

                            return <div className={`${emo.emotion} emotion`} onClick={() => {
                                setSelectedEmotion(emo)
                                toggle()
                            }
                            }>
                                <EditEmotionCard key={emo.id} emotion={emo} finalFoundImage={finalFoundImage} finalChartImages={finalChartImages} />
                            </div>
                        })
                    }
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="chartName">Save Chart As </label>
                            <input
                                type="text"
                                id="chartName"
                                ref={chartName}
                                defaultValue={foundSavedChart.name}
                                required
                                autoFocus
                                className="form-control"
                            />
                        </div>
                    </fieldset>
                </div>
                <Button onClick={() => {
                    editSavedChart()
                }}>Update Chart</Button>
            </article>
            <Modal isOpen={modal} toggler={toggle}>
                <ModalHeader toggler={toggle}>
                    Choose Your Emotion
                </ModalHeader>
                <ModalBody>
                    <EditChooseEmotionModal toggler={toggle} emotion={selectedEmotion} foundSavedChart={foundSavedChart} foundSavedChartImages={foundSavedChartImages} />
                </ModalBody>
            </Modal>

        </>
    )


}
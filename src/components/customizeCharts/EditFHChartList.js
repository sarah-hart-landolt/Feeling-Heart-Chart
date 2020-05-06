import React, { useContext, useState, useRef} from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { EditEmotionCard } from "./EmotionCard"
import { ChooseEmotionModal } from "./ChoseEmotionModal"
import "./FHChartList.css"
import { EmotionContext } from "./EmotionProvider"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"
import { ImageContext } from "../images/ImageProvider"
import { SavedChartContext } from "../savedCharts/SavedChartProvider"

export const EditFHChartList = ({foundSavedChart}) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { emotions } = useContext(EmotionContext)
    const { images } = useContext(ImageContext)
    const { savedChartImages } = useContext(SavedChartImageContext)
    const [selectedEmotion, setSelectedEmotion] = useState()
    const { newSavedCharts, updateSavedChart }= useContext(SavedChartContext)
    const chartName= useRef()
    const foundSavedChartImages = savedChartImages.filter(savedChartImage=>savedChartImage.savedChartId === foundSavedChart.id) || {}
    const finalChartImages = foundSavedChartImages.map(fSCI => { return images.find(img=> img.id ===fSCI.imageId)}) || {}

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
            <h2>Feeling Heart</h2>
            <div className="emotions">
        {
            emotions.map(emo => {
                // Find if there are any saved images for this emotion
               const filteredSavedChartImages= savedChartImages.filter(savedChImg=>savedChImg.savedChartId ===foundSavedChart.id ) || {}
               const savedChartImage= filteredSavedChartImages.find(filteredSavedChartImageObj=>filteredSavedChartImageObj.emotionId ===emo.id) || {}
               const foundImage = images.find(image=>image.id===savedChartImage.imageId) || {}

            return <div className= {`${emo.emotion} emotion`} onClick={()=>{
                setSelectedEmotion(emo)
                toggle()}}>
            <EditEmotionCard key={emo.id} emotion={emo} foundImage={foundImage} finalChartImages={finalChartImages}/>
            </div>})
            }
             <fieldset>
                <div className="form-group">
                    <label htmlFor="chartName">Save Chart As </label>
                    <input
                        type="text"
                        id="chartName"
                        ref={chartName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Quarantine Feels"
                    />
                </div>
            </fieldset>
             </div>
            {/* <Button onClick={()=>{
                                editSavedChart()
                                props.setActiveList("homepage_view")}} >Update Chart</Button> */}
            </article>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                Choose Your Emotion
                </ModalHeader>
                <ModalBody>
                    <ChooseEmotionModal toggler={toggle} emotion= {selectedEmotion}/>
                </ModalBody>
            </Modal>

        </>
    )


    }
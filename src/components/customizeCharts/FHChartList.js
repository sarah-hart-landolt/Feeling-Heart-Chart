import React, { useContext, useState, useRef, useEffect } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { EmotionCard } from "./EmotionCard"
import { ChooseEmotionModal } from "./ChoseEmotionModal"
import "./FHChartList.css"
import { EmotionContext } from "./EmotionProvider"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"
import { ImageContext } from "../images/ImageProvider"
import { SavedChartContext } from "../savedCharts/SavedChartProvider"

// define all states here. in modal, pass down each state
export const FHChartList = (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { emotions } = useContext(EmotionContext)
    const { images } = useContext(ImageContext)
    const { savedChartImages } = useContext(SavedChartImageContext)

    const [selectedEmotion, setSelectedEmotion] = useState({ id: 0 })
    const [chartImages, setChartImages] = useState([])

    const { newSavedChart, updateSavedChart } = useContext(SavedChartContext)
    const chartName = useRef()

    useEffect(() => {
        //needs to be inside of an effect hook //need a change state variable (that has savedChartImages)
        setChartImages(savedChartImages.filter(savedChImg => savedChImg.savedChartId === newSavedChart.id) || [])

    }
        , [savedChartImages])


    const editSavedChart = () => {

        if (chartName.current.value === "") {
            window.alert("Please name your chart")
        } else {
            console.log(newSavedChart)
            updateSavedChart({
                id: newSavedChart.id,
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
                            // const filteredSavedChartImages= savedChartImages.filter(savedChImg=>savedChImg.savedChartId ===newSavedChart.id ) || []
                            const savedChartImage = chartImages.find(filteredSavedChartImageObj => filteredSavedChartImageObj.emotionId === emo.id) || {}
                            const foundImage = images.find(image => image.id === savedChartImage.imageId) || {}

                            return <div className={`${emo.emotion} emotion`} onClick={() => {
                                setSelectedEmotion(emo)
                                toggle()
                            }}>
                                <EmotionCard key={`emotion_${emo.id}`} emotion={emo} foundImage={foundImage} />
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
                                required
                                autoFocus
                                className="form-control"
                                placeholder="Quarantine Feels"
                            />
                        </div>
                    </fieldset>
                </div>
                <Button onClick={() => {
                    editSavedChart()
                    props.setActiveList("homepage_view")
                }} >Save Chart</Button>
            </article>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Choose Your Emotion
                </ModalHeader>
                <ModalBody>
                    <ChooseEmotionModal key={selectedEmotion.id} toggle={toggle} emotion={selectedEmotion} fdSavedChartImages={chartImages} />
                </ModalBody>
            </Modal>

        </>
    )


}





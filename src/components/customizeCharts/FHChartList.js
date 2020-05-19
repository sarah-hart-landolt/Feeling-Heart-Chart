import React, { useContext, useState, useRef, useEffect } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { EmotionCard } from "./EmotionCard"
import { ChooseEmotionModal } from "./ChoseEmotionModal"
import "./FHChartList.css"
import { EmotionContext } from "./EmotionProvider"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"
import { ImageContext } from "../images/ImageProvider"
import { SavedChartContext } from "../savedCharts/SavedChartProvider"
import feelingheartText from "../images/feelingheartText.jpg"
import { MDBIcon, MDBBtn } from "mdbreact";




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
        const filteredImages = savedChartImages.filter(savedChImg => savedChImg.savedChartId === newSavedChart.id) || []
        setChartImages(filteredImages)
        console.log("Chart images filtered", filteredImages)

    }, [savedChartImages])

    const editSavedChart = () => {

        if (chartName.current.value === "") {
            window.alert("Please name your chart")
        } else {
            updateSavedChart({
                id: newSavedChart.id,
                name: chartName.current.value,
                userId: parseInt(localStorage.getItem("feelingHeart_customer")),
                timestamp: Date.now(),
                price: "$70",
            }).then(props.setActiveList("homepage_view"))
        }
    }


    return (
        <>
            <article className="FHChartList">
                <br></br>
               <div className="ImgContainer"><img className="feelingHeart_imgText" src={feelingheartText} /></div> 
                <div className="emotions">
                    {
                        emotions.map(emo => {
                            // Find if there are any saved images for this emotion
                            // const filteredSavedChartImages= savedChartImages.filter(savedChImg=>savedChImg.savedChartId ===newSavedChart.id ) || []
                            const savedChartImage = chartImages.find(filteredSavedChartImageObj => filteredSavedChartImageObj.emotionId === emo.id) || {}
                            const foundImage = images.find(image => image.id === savedChartImage.imageId) || {}

                            return <MDBBtn outline color="secondary" key={`emotionCard--${emo.id}`} className={`${emo.emotion} emotion`} onClick={() => {
                                setSelectedEmotion(emo)
                                toggle()
                            }}>
                                <EmotionCard key={`emotion_${emo.id}`} emotion={emo} foundImage={foundImage} />
                            </MDBBtn>
                        })
                    }

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="chartName"><h2>Name Your Chart!</h2> </label>
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
                        <Button onClick={() => {
                    editSavedChart()
                }} >Save Chart</Button>
                    </fieldset>
                    
                </div>
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





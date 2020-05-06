import React, { useContext, useState, useRef} from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { EmotionCard } from "./EmotionCard"
import {ChooseEmotionModal} from "./ChoseEmotionModal"
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
    const [selectedEmotion, setSelectedEmotion] = useState()
    const { newSavedChart, updateSavedChart }= useContext(SavedChartContext)
    const chartName= useRef()

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
               const filteredSavedChartImages= savedChartImages.filter(savedChImg=>savedChImg.savedChartId ===newSavedChart.id ) || {}
               const savedChartImage= filteredSavedChartImages.find(filteredSavedChartImageObj=>filteredSavedChartImageObj.emotionId ===emo.id) || {}
               const foundImage = images.find(image=>image.id===savedChartImage.imageId) || {}

            return <div className= {`${emo.emotion} emotion`} onClick={()=>{
                setSelectedEmotion(emo)
                toggle()}}>
            <EmotionCard key={emo.id} emotion={emo} foundImage={foundImage} />
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
            <Button onClick={()=>{
                                editSavedChart()
                                props.setActiveList("homepage_view")}} >Save Chart</Button>
            </article>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                Choose Your Emotion
                </ModalHeader>
                <ModalBody>
                    <ChooseEmotionModal toggler={toggle} emotion= {selectedEmotion} />
                </ModalBody>
            </Modal>

        </>
    )


    }

    





       // const toggle = () => setModal(!modal)
    // write function outside of return that finds the name of the emotion
    // line 22 write an onClick function and make it specific to each card somehow
    // onClick wil show modal based on card it was clicked
    //define state
    //define default view that will display all, on click of each card, change activeview to that specific emotion view (effect hook)




    // const FHChartList= () => (
    //     <FHChartList/>
    // )

    // const showChooseEmotion= () => {
    //     const activeEmotion = parseInt()
    //     const currentEmotion= emotions.find(emo => emo.emotion === activeView)
    //     const imageArray = images.filter(img=> img.EmotionId === currentEmotion.id)
    //       return <ChooseEmotionModal key= {imageArray.id} imageArray={imageArray}/>
    // }

    // useEffect(() => {
    //     // if (activeView === "FHChartList") {
    //     //     return (
    //     //         <>
    //     //             <article className="FHChartList">
    //     //             <h2>Feeling Heart</h2>
    //     //             <div className="emotions">
    //     //         {
    //     //             emotions.map(emo =>
    //     //             <div className= {`${emo.emotion} emotion`} onClick={()=> setActiveView(`${emo.emotion}`)}>
    //     //             <EmotionCard key={emo.id} emotion={emo}/>Click to Choose Your {`${emo.emotion}`}</div>)
    //     //         }
    //     //         {components}
    //     //              </div>
    //     //             <Button>Save Chart</Button>
    //     //             </article>

    //     //         </>
    //     //     )

    //     // } else
    //     if (activeView === "sad"){
    //      setComponents(showChooseEmotion)}
    //     else if(activeView === "confused") {
    //     setComponents(showChooseEmotion)
    //     }

    // }, [activeView])

    // return (
    //     <>
    //         <article className="FHChartList">
    //         <h2>Feeling Heart</h2>
    //         <div className="emotions">
    //     {
    //         emotions.map(emo =>
    //         <div className= {`${emo.emotion} emotion`} onClick={()=> setActiveView(`${emo.emotion}`)}>
    //         <EmotionCard key={emo.id} emotion={emo}/>Click to Choose Your {`${emo.emotion}`}</div>)
    //     }
    //     {components}
    //          </div>
    //         <Button>Save Chart</Button>
    //         </article>

    //     </>
    // )
    // const captureSelectedEmotion = (emo) => {
    //     setSelectedEmotion(`${emo.emotion}`)

    // }
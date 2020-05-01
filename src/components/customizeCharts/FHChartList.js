import React, { useContext, useState, useEffect} from "react"
import { Button } from "reactstrap"
import { ImageContext } from "../images/ImageProvider"
import { EmotionCard } from "./EmotionCard"
import {ChooseEmotionModal} from "./ChoseEmotionModal"
import "./FHChartList.css"
import { EmotionContext } from "./EmotionProvider"

// define all states here. in modal, pass down each state 
export const FHChartList = () => {
    const [activeView, setActiveView] = useState("FHChartList")
    const [components, setComponents] = useState()
    const { emotions } = useContext(EmotionContext)
    const { images } = useContext(ImageContext)
  

    // const FHChartList= () => (
    //     <FHChartList/>
    // )
   
    const showChooseEmotion= () => (
        <ChooseEmotionModal />    
        
        // const currentEmotion= emotions.find(emo => emo.emotion === activeView)
        // const imageArray = images.filter(img=> img.EmotionId === currentEmotion.id)
        //   return <ChooseEmotionModal key= {imageArray.id} imageArray={imageArray}/>
    
        )

     


    useEffect(() => {
        // if (activeView === "FHChartList") {
        //     return (
        //         <>
        //             <article className="FHChartList">
        //             <h2>Feeling Heart</h2>
        //             <div className="emotions">
        //         {
        //             emotions.map(emo =>
        //             <div className= {`${emo.emotion} emotion`} onClick={()=> setActiveView(`${emo.emotion}`)}> 
        //             <EmotionCard key={emo.id} emotion={emo}/>Click to Choose Your {`${emo.emotion}`}</div>)
        //         }
        //         {components}
        //              </div>
        //             <Button>Save Chart</Button>
        //             </article>
        
        //         </>
        //     )

        // } else 
        if (activeView === "sad"){
         setComponents(showChooseEmotion)} 
            else if(activeView === "confused") {
            setComponents(showChooseEmotion)
        }
        
    }, [activeView])

    return (
        <>
            <article className="FHChartList">
            <h2>Feeling Heart</h2>
            <div className="emotions">
        {
            emotions.map(emo =>
            <div className= {`${emo.emotion} emotion`} onClick={()=> setActiveView(`${emo.emotion}`)}> 
            <EmotionCard key={emo.id} emotion={emo}/>Click to Choose Your {`${emo.emotion}`}</div>)
        }
        {components}
             </div>
            <Button>Save Chart</Button>
            </article>

        </>
    )
 
    
    }


       // const toggle = () => setModal(!modal)
    // write function outside of return that finds the name of the emotion 
    // line 22 write an onClick function and make it specific to each card somehow 
    // onClick wil show modal based on card it was clicked 
    //define state 
    //define default view that will display all, on click of each card, change activeview to that specific emotion view (effect hook)
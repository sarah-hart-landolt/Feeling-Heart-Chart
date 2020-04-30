import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const EmotionContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const EmotionProvider = (props) => {
    const [emotions, setEmotions] = useState([])
    
const getEmotions = () => {
    return fetch("http://localhost:8090/emotions")
            .then(res => res.json())
            .then(setEmotions)
    }


    /*
        Load all Emotions when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getEmotions()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [emotions])

    return (
        <EmotionContext.Provider value={
            {
                emotions
            }
        }>
            {props.children}
        </EmotionContext.Provider>
    )
    }
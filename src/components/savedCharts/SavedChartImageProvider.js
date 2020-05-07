import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const SavedChartImageContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const SavedChartImageProvider = (props) => {
    const [savedChartImages, setSavedChartImages] = useState([])
    
    
const releaseSavedChartImage = savedChartImageId => {
        return fetch(`http://localhost:8090/savedChartImages/${savedChartImageId}`, {
            method: "DELETE"
        })
            .then(getSavedChartImages)
    }
const getSavedChartImages = () => {
    return fetch("http://localhost:8090/savedChartImages")
            .then(res => res.json())
            .then(setSavedChartImages)
    }

const updateSavedChartImage = savedChartImage => {
        return fetch(`http://localhost:8090/savedChartImages/${savedChartImage.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(savedChartImage)
        })
            .then(getSavedChartImages)
    }

const addSavedChartImage = savedChartImage => {
    return fetch("http://localhost:8090/savedChartImages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(savedChartImage)
        })
            .then(getSavedChartImages)
    }

    /*
        Load all saved chart images when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getSavedChartImages()
    }, [])

    useEffect(() => {
        console.log("****  savedChartImage APPLICATION STATE CHANGED  ****")
    }, [savedChartImages])

    return (
        <SavedChartImageContext.Provider value={
            {
                savedChartImages, addSavedChartImage, releaseSavedChartImage, updateSavedChartImage
            }
        }>
            {props.children}
        </SavedChartImageContext.Provider>
    )
    }
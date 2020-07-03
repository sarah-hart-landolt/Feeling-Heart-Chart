import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ImageContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ImageProvider = (props) => {
    const [images, setImages] = useState([])

    const getImages = () => {
        return fetch("http://localhost:8090/images")
            .then(res => res.json())
            .then(setImages)
    }


    /*
        Load all Images when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getImages()
    }, [])

    useEffect(() => {
        console.log("****  IMAGE APPLICATION STATE CHANGED  ****")
    }, [images])

    return (
        <ImageContext.Provider value={
            {
                images
            }
        }>
            {props.children}
        </ImageContext.Provider>
    )
}
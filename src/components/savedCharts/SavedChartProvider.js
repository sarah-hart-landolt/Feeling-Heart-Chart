import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const SavedChartContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const SavedChartProvider = (props) => {
    const [savedCharts, setSavedCharts] = useState([])
    const [newSavedCharts, setNewSavedCharts]= useState([])
    
    
const deleteSavedChart = savedChartId => {
        return fetch(`http://localhost:8090/savedCharts/${savedChartId}`, {
            method: "DELETE"
        })
            .then(getSavedCharts)
    }
const getSavedCharts = () => {
    return fetch("http://localhost:8090/savedCharts")
            .then(res => res.json())
            .then(setSavedCharts)
    }

const updateSavedChart = savedChart => {
        return fetch(`http://localhost:8090/savedCharts/${savedChart.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(savedChart)
        })
        .then(getSavedCharts)
    }

const addSavedChart = savedChart => {
    return fetch("http://localhost:8090/savedCharts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(savedChart)
        })
            .then(res => res.json())
                .then((res) => {
                const createdObj = res
                getSavedCharts()
                return createdObj
        })
            

    }

    /*
        Load all saved charts when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getSavedCharts()
    }, [])

    useEffect(() => {
        console.log("****  savedChart APPLICATION STATE CHANGED  ****")
    }, [savedCharts])

    return (
        <SavedChartContext.Provider value={
            {
                savedCharts, addSavedChart, deleteSavedChart, updateSavedChart, newSavedCharts, setNewSavedCharts
            }
        }>
            {props.children}
        </SavedChartContext.Provider>
    )
    }
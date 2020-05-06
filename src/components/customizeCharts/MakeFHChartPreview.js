import React, {useContext} from "react"
import { Button } from "reactstrap"
import feelingheart from "../auth/feelingheart.png"
import  "./MakeFHChartPreview.css"
import { SavedChartContext } from "../savedCharts/SavedChartProvider"


export const MakeFHChartPreviewList = (props) => {
    const { addSavedChart, setNewSavedChart } = useContext(SavedChartContext)
 


    const saveChart = () => {
        // create a new saved chart object
        // Make sure that the saved chart object has the customerId and locationId foreign keys on it.
        const newSavedChartObj = {
            userId: parseInt(localStorage.getItem("feelingHeart_customer")),
            timestamp: Date.now(),
            price: "$70",
            name: ""
        }       
        
        console.log(newSavedChartObj)
        // and save it to the API.
        addSavedChart(newSavedChartObj).then((res) => {
            setNewSavedChart(res)
        })

    }

    return (
        <>
            <article className="MakeFHChartPreview">
                <h2>Make your own Feeling Chart !</h2>
                <img className="feelingHeart_img" src={feelingheart} />
                <Button onClick={()=>{saveChart() 
                                    props.setActiveList("FHChartList")}}>Make New Chart</Button>
            </article>
        </>
    )
    }

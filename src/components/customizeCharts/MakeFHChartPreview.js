import React, {useContext} from "react"
import { Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from "reactstrap"
import feelingheart from "../auth/feelingheart.png"
import  "./MakeFHChartPreview.css"
import { SavedChartContext } from "../savedCharts/SavedChartProvider"


export const MakeFHChartPreviewList = (props) => {
    const { addSavedChart, setNewSavedChart } = useContext(SavedChartContext)
 

    const saveChart = () => {
        // create a new saved chart object
        const newSavedChartObj = {
            userId: parseInt(localStorage.getItem("feelingHeart_customer")),
            timestamp: Date.now(),
            price: "$70",
            name: ""
        }       
        
        // and save it to the API.
        return addSavedChart(newSavedChartObj).then((res) => { 
            console.log(res)
            setNewSavedChart(res)

        })

    }

    return (
        <>
         <article className="MakeFHChartPreview">
         <h2><i class="fas fa-plus"></i> Create New Chart</h2>
         <br></br>
         <Card className="cardZoom">
        <CardImg top width="100%" src={feelingheart} alt="Card image cap" />
        <CardBody>
          <CardTitle><h2>Make your own Feeling Chart !</h2></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button onClick={()=>{
                    saveChart().then(() => {
                        props.setActiveList("FHChartList")
                    })
                    
                }}>Make New Chart</Button>
        </CardBody>
      </Card>
      </article>

        </>
    )
    }

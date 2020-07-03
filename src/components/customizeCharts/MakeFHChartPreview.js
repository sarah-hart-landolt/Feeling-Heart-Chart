import React, { useContext } from "react"
import {
    Button, Card, CardImg, CardText, CardBody,
    CardTitle
} from "reactstrap"
import feelingheart from "../auth/feelingheart.png"
import "./MakeFHChartPreview.css"
import { SavedChartContext } from "../savedCharts/SavedChartProvider"
import { MDBBtn } from "mdbreact";


export const MakeFHChartPreviewList = (props) => {
    const { addSavedChart, setNewSavedChart } = useContext(SavedChartContext)


    const saveChart = () => {
        // create a new saved chart object
        const newSavedChartObj = {
            userId: parseInt(localStorage.getItem("feelingHeart_customer")),
            timestamp: Date.now(),
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
                    <CardImg top width="100%" src={feelingheart} alt="Card image cap" onClick={() => {
                        saveChart().then(() => {
                            props.setActiveList("FHChartList")
                        })

                    }} />
                    <CardBody>
                        <CardTitle><h3>Create your own Feeling Heart Chart !</h3></CardTitle>
                        <CardText>Customizable feeling charts made to order. Receive print and digital download once purchased.</CardText>
                        <MDBBtn gradient="purple" onClick={() => {
                            saveChart().then(() => {
                                props.setActiveList("FHChartList")
                            })

                        }}>Make New Chart</MDBBtn>
                    </CardBody>
                </Card>
            </article>

        </>
    )
}

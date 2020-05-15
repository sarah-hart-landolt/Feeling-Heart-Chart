import React, { useContext, useState } from "react"
import "./savedCharts.css"
import feelingheart from "../auth/feelingheart.png"
import {
    Button, Modal, ModalHeader, ModalBody, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from "reactstrap"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"
import { SavedChartPreview } from "./SavedChartPreview"
import { format, fromUnixTime } from 'date-fns'
import { SavedChartContext } from "./SavedChartProvider"
import { EditFHChartList } from "../customizeCharts/EditFHChartList"
import feelingheartText from "../images/feelingheartText.jpg"




export const SavedChartCard = ({ foundSavedChart }) => {
    const { savedChartImages } = useContext(SavedChartImageContext)
    const { deleteSavedChart } = useContext(SavedChartContext)
    const foundSavedChartImages = savedChartImages.filter(savedChartImage => savedChartImage.savedChartId === foundSavedChart.id)
    const readableDate = () => format(fromUnixTime(Math.floor(foundSavedChart.timestamp / 1000)), "MM/dd/yyyy")
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)


    if (foundSavedChart.hasOwnProperty("name")) {
        return (
            <section className="savedChartCard">
                <Card className="cardZoom" >
                    <CardBody>
                        <CardTitle><h3 className="savedChartCard__name">{foundSavedChart.name}</h3></CardTitle>
                        <CardSubtitle><div className="savedChartCard__date">{readableDate()}</div></CardSubtitle>
                    </CardBody>
                    <div className="ImgContainer"><img className="feelingHeart_imgTextPreview" src={feelingheartText} /></div>
                    <div className="savedChartPreview">
                        {
                            foundSavedChartImages.map(fSCI => {
                                return <SavedChartPreview key={fSCI.id}
                                    fSCI={fSCI} />
                            })
                        }
                    </div>
                    <CardBody>
                        <div className="savedChartCard__buttons">
                            <Button onClick={() => deleteSavedChart(foundSavedChart.id)}>Delete</Button>
                            <Button onClick={() => { toggleEdit() }}>Edit</Button>
                        </div>
                    </CardBody>
                </Card>

                <Modal isOpen={editModal} toggle={toggleEdit} contentClassName="custom-modal-style">
                    <ModalHeader toggle={toggleEdit}>
                    </ModalHeader>
                    <ModalBody>
                        <EditFHChartList key={foundSavedChart.id} toggleEdit={toggleEdit} foundSavedChart={foundSavedChart} />
                    </ModalBody>
                </Modal>
                <br></br>
            </section>
        )
    } else {
        return (
            <section className="savedChartCard">
                <h3 className="savedChartCard__name">Sarah's Chart</h3>
                <div className="savedChartCard__date">4/21/2020</div>
                <div className="savedChartCard__savedChartPreview"> <img class="feelingHeart_img" src={feelingheart} /></div>
            </section>

        )
    }
}

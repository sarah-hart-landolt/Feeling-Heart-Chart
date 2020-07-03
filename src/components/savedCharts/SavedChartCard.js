import React, { useContext, useState } from "react"
import "./savedCharts.css"
import feelingheart from "../auth/feelingheart.png"
import {
    Modal, ModalHeader, ModalBody, Card, CardBody, CardTitle, CardSubtitle
} from "reactstrap"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"
import { SavedChartPreview } from "./SavedChartPreview"
import { format, fromUnixTime } from 'date-fns'
import { SavedChartContext } from "./SavedChartProvider"
import { EditFHChartList } from "../customizeCharts/EditFHChartList"
import feelingheartText from "../images/feelingheartText.jpg"
import { MDBIcon, MDBBtn } from "mdbreact";
import { ChoseProductModal } from "../cart/ChoseProductModal"




export const SavedChartCard = ({ foundSavedChart }) => {
    const { savedChartImages } = useContext(SavedChartImageContext)
    const { deleteSavedChart } = useContext(SavedChartContext)
    const foundSavedChartImages = savedChartImages.filter(savedChartImage => savedChartImage.savedChartId === foundSavedChart.id)
    const readableDate = () => format(fromUnixTime(Math.floor(foundSavedChart.timestamp / 1000)), "MM/dd/yyyy")
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)
    const [productModal, setProductModal] = useState(false)
    const toggleProduct = () => setProductModal(!productModal)



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
                            <MDBBtn gradient="purple" onClick={() => { toggleProduct() }}><MDBIcon icon="shopping-cart"></MDBIcon></MDBBtn>
                            <MDBBtn gradient="blue" onClick={() => { toggleEdit() }}><MDBIcon icon="edit" /></MDBBtn>
                            <MDBBtn gradient="aqua" onClick={() => deleteSavedChart(foundSavedChart.id)}><MDBIcon far icon="trash-alt" /></MDBBtn>
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


                <Modal isOpen={productModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={toggleProduct} contentClassName="custom-modal-style-product" >
                    <ModalHeader toggle={toggleProduct}>Choose Product</ModalHeader>
                    <ModalBody>
                        <ChoseProductModal key={foundSavedChart.id} toggleProduct={toggleProduct} foundSavedChart={foundSavedChart} />
                    </ModalBody>
                </Modal>

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

import React, { useContext, useState } from "react"
import { MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { ShoppingCartContext } from "./ShoppingCartProvider";
import { Modal, ModalHeader, ModalBody, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { ShoppingCart } from "./ShoppingCart"
import "./ShoppingCart.css"



export const ChoseProductModal = ({ toggleProduct, foundSavedChart }) => {
    const { addShoppingCart } = useContext(ShoppingCartContext)
    const [cartModal, setCartModal] = useState(false)
    const toggleCart = () => setCartModal(!cartModal)


    const saveDigitalShoppingCart = () => {
        // create a new saved shopping cart object
        const newShoppingCartObj = {
            userId: parseInt(localStorage.getItem("feelingHeart_customer")),
            timestamp: Date.now(),
            price: 20,
            name: foundSavedChart.name,
            foundSavedChartId: foundSavedChart.id,
            quantity: 1,
            type: "digital : $20"
        }

        // and save it to the API.
        return addShoppingCart(newShoppingCartObj).then(toggleCart())

    }

    const savePrintShoppingCart = () => {
        // create a new saved shopping cart object
        const newShoppingCartObj = {
            userId: parseInt(localStorage.getItem("feelingHeart_customer")),
            timestamp: Date.now(),
            price: 65,
            name: foundSavedChart.name,
            foundSavedChartId: foundSavedChart.id,
            quantity: 1,
            type: "print : $65"
        }

        // and save it to the API.
        return addShoppingCart(newShoppingCartObj).then(toggleCart())

    }

    const saveDigitalPrintShoppingCart = () => {
        // create a new saved shopping cart object
        const newShoppingCartObj = {
            userId: parseInt(localStorage.getItem("feelingHeart_customer")),
            timestamp: Date.now(),
            price: 65,
            name: foundSavedChart.name,
            foundSavedChartId: foundSavedChart.id,
            quantity: 1,
            type: "digital & print : $75"
        }

        // and save it to the API.
        return addShoppingCart(newShoppingCartObj).then(toggleCart())

    }

    return (
        <>
            <section className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Choose your plan!
      </h2>
                <p className="grey-text text-center w-responsive mx-auto mb-5">
                </p>
                <MDBRow>
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBCard className="purple-gradient">
                            <MDBCardBody className="white-text">
                                <h5 className="mb-4">Digital</h5>
                                <div className="d-flex justify-content-center">
                                    <div className="card-circle d-flex justify-content-center align-items-center">
                                        <MDBIcon icon="home" className="light-blue-text" />
                                    </div>
                                </div>
                                <h2 className="font-weight-bold my-4">$20</h2>
                                <p>
                                    Digital Download to use for screens. Emailed after purchase.
              </p>
                                <MDBBtn outline rounded color="white" onClick={() => { saveDigitalShoppingCart() }}>
                                    Buy now
              </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBCard className="peach-gradient">
                            <MDBCardBody className="white-text">
                                <h5 className="mb-4">Print</h5>
                                <div className="d-flex justify-content-center">
                                    <div className="card-circle d-flex justify-content-center align-items-center">
                                        <MDBIcon icon="users" className="light-blue-text" />
                                    </div>
                                </div>
                                <h2 className="font-weight-bold my-4">$65</h2>
                                <p>
                                    Unique 11"x 14" matte print from local Nashville, TN Printing Company.
              </p>
                                <MDBBtn outline rounded color="white" onClick={() => { savePrintShoppingCart() }}>
                                    Buy now
              </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBCard className="aqua-gradient">
                            <MDBCardBody className="white-text">
                                <h5 className="mb-4">Digital/ Print</h5>
                                <div className="d-flex justify-content-center">
                                    <div className="card-circle d-flex justify-content-center align-items-center">
                                        <MDBIcon far icon="chart-bar" className="light-blue-text" />
                                    </div>
                                </div>

                                <h2 className="font-weight-bold my-4">$75</h2>
                                <p>
                                    Package deal for digital download and unique 11" x 14" matte print.
              </p>
                                <MDBBtn outline rounded color="white" onClick={() => { saveDigitalPrintShoppingCart() }}>
                                    Buy now
              </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <Modal isOpen={cartModal} toggle={toggleCart} contentClassName="custom-modal-style-cart">
                    <ModalHeader className="shoppingCartFont" toggle={toggleCart} toggle={toggleProduct}>
                        Shopping Cart
                    </ModalHeader>
                    <ModalBody>
                        <ShoppingCart key={foundSavedChart.id} toggleCart={toggleCart} foundSavedChart={foundSavedChart} />
                    </ModalBody>
                </Modal>
                <br></br>
            </section>
        </>
    )
}


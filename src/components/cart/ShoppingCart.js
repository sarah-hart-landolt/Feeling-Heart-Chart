import React, { useContext } from "react"
import { MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import { ShoppingCartContext } from "./ShoppingCartProvider";
import { format, fromUnixTime } from 'date-fns'
import "./ShoppingCart.css"
import feelingheartText from "../images/feelingheartText.jpg"
import { ShoppingCartChartPreview} from "./ShoppingCartChartPreview"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider";






export const ShoppingCart = ({foundSavedChart}) => {
    const { shoppingCarts, deleteShoppingCart } = useContext(ShoppingCartContext)
    const userShoppingCarts = shoppingCarts.filter(shoppingCart => shoppingCart.userId === parseInt(localStorage.getItem("feelingHeart_customer"))) || []
    const subtotal = userShoppingCarts.reduce(function (sum, item) {
        return sum = sum + item.price;
    }, 0)
    const withTax = ((subtotal * .0925) + subtotal).toFixed(2);
    const { savedChartImages } = useContext(SavedChartImageContext)


    return (
        <>
            <h3 class="shoppingCartFont">Shopping cart</h3>
            <MDBContainer>
                <MDBRow className="mb-4">
                    <MDBCol sm="8">
                        <MDBCard>
                            <MDBCardBody>
                                
                                <MDBCardTitle><h5 class="mb-4">Cart (<span>2</span> items)</h5></MDBCardTitle>
                                <MDBCardText>
                                    <div>
                                    {
                                        userShoppingCarts.map(userShoppingCart => {
                                            const readableDate = format(fromUnixTime(Math.floor(userShoppingCart.timestamp / 1000)), "MM/dd/yyyy")
                                            const foundSavedChartImages = savedChartImages.filter(savedChartImage => savedChartImage.savedChartId === userShoppingCart.foundSavedChartId)
                                           
                                            return  <div className="cartItem">
                                                <div className="cartItem__info">
                                                    <div><h4>{userShoppingCart.name} Chart</h4></div>
                                                    <div>Date added: {readableDate}</div>
                                                </div>
                                                <div className="savedChartPreview__container"><div className="ImgContainer"><img className="feelingHeart_imgTextPreviewSC" src={feelingheartText} /></div>
                                                <div className="savedChartPreview__shoppingCart">

                                             {
                                                foundSavedChartImages.map(fSCI => {

                                                    return <ShoppingCartChartPreview key={fSCI.id} 
                                                        fSCI={fSCI} />
                                                })
                                            }</div>
                                            </div>
                                                <h4><MDBIcon className="trashCan" icon="trash-alt" onClick={() => deleteShoppingCart(userShoppingCart.id)} /></h4> <br></br></div>

                                        })
                                    }
                                    </div>

                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm="4">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Subtotal</MDBCardTitle>
                                <MDBCardText>

                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Subtotal
                                            <span>${subtotal}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                             <span>Free</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount: </strong>
                                                <strong class="mb-0">(with Tax (9.25%))</strong>
                                            </div>
                                            <span><strong>${withTax}</strong></span>
                                        </li>
                                    </ul>
                                </MDBCardText>
                                <MDBBtn color="primary">Checkout</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle><h5 class="mb-4">Expected shipping delivery</h5></MDBCardTitle>
                                <MDBCardText>
                                    All prints are made to order. Please allow 2 weeks for printing and shipping.
            </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                  
            </MDBContainer>
        </>
    )
}
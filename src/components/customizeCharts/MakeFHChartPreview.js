import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import feelingheart from "../auth/feelingheart.png"
import  "./MakeFHChartPreview.css"


export const MakeFHChartPreviewList = () => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <article className="MakeFHChartPreview">
            <h2>Make your own Feeling Chart !</h2>
            <img class="feelingHeart_img" src={feelingheart} />
            <Button onClick={toggle}>New Chart</Button>
            </article>
{/* 
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal> */}
        </>
    )
    }

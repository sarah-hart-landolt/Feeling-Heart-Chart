import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

export const FHChartList = () => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <article className="FHChartList">
            <h2>Feeling Heart</h2>
            <Button onClick={toggle}>Save Chart</Button>
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
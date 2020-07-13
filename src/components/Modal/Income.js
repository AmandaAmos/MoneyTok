import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";

function AddIncome() {
    const [smShow, setSmShow] = useState(false);
    
    return (
        <div>
            <Button variant="primary" onClick={() => setSmShow(true)}>
                Add Income
            </Button>{''}
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="Income-sm">
                        Add Income
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formIncomeDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Babysitting" />
                        </Form.Group>
                        <Form.Group controlId="formIncomeAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="25" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                        Add Income
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddIncome;
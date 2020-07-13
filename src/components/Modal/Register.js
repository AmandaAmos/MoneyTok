import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";

function Register() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <Button style={{color: "white", padding: "5px" }} variant="link" onClick={() => setLgShow(true)}>
                New User
            </Button>{''}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id="Register-lg">
                        New User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="FirstName" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="LastName" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicBalance">
                            <Form.Label>Balance</Form.Label>
                            <Form.Control type="Balance" placeholder="Balance" />
                        </Form.Group>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="Username" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Create
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Register;
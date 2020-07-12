import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";

function Login() {
    const [smShow, setSmShow] = useState(false);
    return (
        <div>
            <Button variant="link" onClick={() => setSmShow(true)}>
                Login
            </Button>{''}
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="Login-sm">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Login;
import React, {useState} from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

const User = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm  userInfo={props.userInfo} editUser={props.editUser} closemodal={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    <Col md="4" style={{ marginBottom: "1rem" }}>
      <Card style={{ width: "18rem", backgroundColor: "silver", color: "purple", height: "15rem" }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Shenk Users</Card.Subtitle>
          <Card.Title>{props.userInfo.name}</Card.Title>
          <Card.Text>
            <br/>
            Email: {props.userInfo.email}
            <br/>
            <br/>
            Gen: {props.userInfo.gen}
          </Card.Text>
          <Card.Link href="#" onClick={handleShow}>Edit</Card.Link>
          <Card.Link href="#">
            <Button variant="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>{" "}
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
};

export default User;

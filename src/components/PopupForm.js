import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const PopupForm = ({ showForm, setShowForm, setTaskData, taskData }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "to do",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({ title: "", description: "", status: "to do" });
  };

  const handleSubmit = () => {
    const newTask = { ...formData, id: Date.now() };
    setTaskData([...taskData, newTask]);
    handleCloseForm();
  };

  return (
    <Modal show={showForm} onHide={handleCloseForm}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="to do">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseForm}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupForm;

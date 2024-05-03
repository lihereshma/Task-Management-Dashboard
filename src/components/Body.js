import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TaskColumns from "./TaskColumns";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import PopupForm from "./PopupForm";

const Body = () => {
  const [taskData, setTaskData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col xs="1" className="nav-area">
            <div>nav</div>
          </Col>
          <Col className="main">
            <div className="container-header p-3">
              <Button variant="link" onClick={() => setShowForm(true)}>
                + Add a card
              </Button>
            </div>
            <div className="container-area px-1 py-3">
              <TaskColumns taskData={taskData} setTaskData={setTaskData} />
            </div>
          </Col>
        </Row>
      </Container>

      <PopupForm
        showForm={showForm}
        setShowForm={setShowForm}
        setTaskData={setTaskData}
        taskData={taskData}
      />
    </div>
  );
};

export default Body;

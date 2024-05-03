import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { taskData } from "../utils/constants";
import TaskItem from "./TaskItem";
import { useState } from "react";

const TaskColumns = () => {
  const statuses = ["to do", "doing", "done"];
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState(taskData);

  const handleDragging = (dragging) => {
    setIsDragging(dragging);
  };

  const handleUpdateList = (id, newStatus) => {
    setListItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      const droppedItem = prevItems.find((item) => item.id === id);
      return [...updatedItems, { ...droppedItem, status: newStatus }];
    });
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const droppedTask = listItems.find((task) => task.id.toString() === taskId);
    if (droppedTask && droppedTask.status !== status) {
      handleUpdateList(droppedTask.id, status);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDelete = (taskId) => {
    setListItems((prevItems) => prevItems.filter((item) => item.id !== taskId));
  };

  return (
    <Container fluid>
      <Row>
        {statuses.map((status) => (
          <Col xs="4" key={status} className="task-column p-3">
            <h4>{status}</h4>
            <div
              className="tasks-container"
              onDrop={(e) => handleDrop(e, status)}
              onDragOver={handleDragOver}
            >
              {listItems
                .filter((task) => task.status === status)
                .map((task) => (
                  <TaskItem
                    key={task.id}
                    {...task}
                    isDragging={isDragging}
                    handleDragging={handleDragging}
                    handleDelete={handleDelete}
                  />
                ))}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TaskColumns;

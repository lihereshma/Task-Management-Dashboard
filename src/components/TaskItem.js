import Button from "react-bootstrap/Button";

const TaskItem = ({
  title,
  description,
  status,
  id,
  isDragging,
  handleDragging,
  handleDelete,
  handleEdit,
}) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
    handleDragging(true);
  };

  const handleDragEnd = () => {
    handleDragging(false);
  };

  const onDeleteClick = () => {
    handleDelete(id);
  };

  const onEditClick = () => {
    handleEdit(id);
  };

  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`task-item p-2 mb-2 ${isDragging ? "task-dragging" : ""}`}
    >
      <h5>{title}</h5>
      <p>{description}</p>
      <span className={status}></span>
      <Button variant="link" onClick={onEditClick}>
        Edit
      </Button>
      <Button variant="link" onClick={onDeleteClick}>
        Delete
      </Button>
    </div>
  );
};

export default TaskItem;

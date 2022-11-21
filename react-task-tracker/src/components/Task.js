import { MdClose } from 'react-icons/md'
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.text}
            <MdClose onClick={() => onDelete(task.id)}/> {/* this could have been onClick={onDelete} but in this case we want to pass the id up the chain of props so we have to do it in a mong way*/}
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
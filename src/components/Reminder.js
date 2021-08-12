import { FaTimes } from 'react-icons/fa'

const Reminder = ({reminder, onDelete}) => {
    return (
        <div className="reminder">
            <h3>{reminder.text} <FaTimes onClick={() => onDelete(reminder.id)}/> </h3>
            <p>{reminder.day}</p>
        </div>
    )
}

export default Reminder

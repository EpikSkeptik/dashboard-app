import Reminder from './Reminder'

const Reminders = ({reminders, onDelete}) => {
    return (
        <>
            {reminders.map((reminder) => (
                <Reminder key={reminder.id} reminder={reminder} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Reminders

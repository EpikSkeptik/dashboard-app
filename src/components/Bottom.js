import Weather from './Weather'
import DashModal from './DashModal'
import {useState} from 'react'
import Reminders from './Reminders';

const Bottom = () => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminders, setReminders] = useState([
        {
            id: 1,
            text: 'Sample Reminder',
            day: 'tomorrow',
        }
    ])
    

    // Modal Funcions
    const openModal = () => setShow(true);
    const onClose = () => setShow(false);

    // Form Functions
    const onSubmit = (e) => {
        e.preventDefault()

       if(!text) {
            alert('Please add a reminder')
            return
        }

        if(!day) {
            alert('Please add a date and time')
            return
        }
        
        addReminder({text, day})

        setText('');
        setDay('');
    }

    const addReminder = (reminder) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newReminder = {id, ...reminder}
        setReminders([...reminders, newReminder])
    }

    const delReminder = (id) => {
        setReminders(reminders.filter((reminder) => reminder.id !== id))
    }

    return (
        <div className='bottom-container'>
            <Weather/>
           
            <DashModal onClose={onClose} show={show}>
                <form className="add-form" onSubmit={onSubmit}>
                    <div className="form-control">
                        <label>Reminder</label>
                        <input type="text" placeholder="Reminder" value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>
                    <div className="form-control">
                        <label>Day & Time</label>
                        <input type="text" placeholder="Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
                    </div>

                    <input className='btn-submit' type='submit' value='Add Reminder'/>
                </form>
            </DashModal>
            <div className="reminders-container">
                <h1>Reminders</h1>
                <Reminders reminders={reminders} onDelete={delReminder}/>
                <button className="btn-reminder" onClick={openModal}>Add Reminder</button>
            </div>           
        </div>
    )
}

export default Bottom

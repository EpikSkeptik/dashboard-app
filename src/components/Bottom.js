import Weather from './Weather'
import DashModal from './DashModal'
import {useState} from 'react'

const Bottom = () => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [day, setDay] = useState('');

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
        //onAdd(reminder,day)

        setText('');
        setDay('');
    }

    return (
        <div className='bottom-container'>
            <Weather/>
            <button onClick={openModal}>Add Reminder</button>
            <DashModal onClose={onClose} show={show}>
                <form className="add-form" onSubmit={onSubmit}>
                    <div className="form-control">
                        <label>Reminder</label>
                        <input type="text" placeholder="Reminder"/>
                    </div>
                    <div className="form-control">
                        <label>Day & Time</label>
                        <input type="text" placeholder="Day & Time"/>
                    </div>

                    <input className='btn-submit' type='submit' value='Add Reminder'/>
                </form>
            </DashModal>
        </div>
    )
}

export default Bottom

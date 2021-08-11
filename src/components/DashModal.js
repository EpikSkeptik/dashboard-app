

const DashModal = (props) => {
    if (!props.show) {
        return null;
    } 

    return (
            <div className="modal" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Add Reminder</h3>
                    </div>
                    <div className="modal-body">{props.children}</div>
                    <div className="modal-footer">
                        <button className="btn-close" onClick={props.onClose} >Close</button>
                    </div>
                </div>
            </div>
    )
}

export default DashModal
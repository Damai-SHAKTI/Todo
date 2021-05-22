export default function AddToDoForm(props) {
    return (
        <>
        <div className="card text-dark bg-light">
           <div className="card-header h3">Add Todo List</div>
           <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="to-do-title" className="form-label">Title:</label>
                        <input ref={props.titleRef} type="text" className="form-control" id="to-do-title" maxLength="40"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to-do-description">Description:</label>
                        <textarea ref={props.descriptionRef} className="form-control" id="to-do-description" rows="4"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date">Select a date:</label>
                        <input onChange={props.setDateFunc} type="date" id="date" name="date"/><br/>
                        <label className="mt-2" htmlFor="appt">Select a time:</label>
                        <input onChange={props.setTimeFunc} type="time" id="appt" name="appt"/>
                        <button onClick={props.addNewTodoFunc} type="button" className="btn btn-success btn-add" data-bs-toggle="tooltip" data-bs-placement="left" title="click to add new to-do list"><i className="bi bi-plus-circle"></i> Add To List</button>
                    </div>
                    <div><center>{props.error}</center></div>
                </form>
           </div>
        </div>
        </>
    )
}

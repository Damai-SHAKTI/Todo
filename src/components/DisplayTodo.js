export default function DisplayTodo(props) {
    return (   
        <div className="card card-todo" id={"todo" + props.id}>
            <h5 className="card-header">{props.title}</h5>
            <div className="card-body">
                <h5 className="card-title">{props.day}</h5>
                <p className="card-text">{props.description}</p>
                <button onClick={props.deletetodoFunc} className="btn btn-danger"><i className="bi bi-trash-fill"></i> Discard</button>
            </div>
        </div>
    )
}

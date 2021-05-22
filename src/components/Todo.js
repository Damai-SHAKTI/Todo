import DisplayTodo from './DisplayTodo'

export default function Todo({ todos, deleteTodoFunc }) {
    return (
        <div className="todo-list-holder">       
            {todos.length == 0 ? <center style={{fontSize: 20, fontWeight: 500}}>No todos to display</center> :              
                todos.map(todo => {
                    return <DisplayTodo 
                        key={todo.id} 
                        id={todo.id} 
                        day={todo.day}
                        title={todo.title} 
                        description={todo.description}
                        deletetodoFunc={() => {deleteTodoFunc(todo)}}
                    />
                })
            }
        </div>
    )
}

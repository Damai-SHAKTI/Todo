import './App.css'
import React, { useState, useRef, useEffect } from 'react'
import Header from './components/Header'
import AddToDoForm from './components/AddToDoForm'
import Todo from './components/Todo'

function App() {

  var date, time
  var Local_Storage_Key = "todos"
  const [todos, setTodos] = useState([])
  const [errortext, setErrorText] = useState('')
  const TitleRef = useRef()
  const DescriptionRef = useRef()

  const SetTime = () => {
    time = document.getElementById("appt").value
  }

  const SetDate = () => {
    var getDate = new String(new Date(document.getElementById("date").value))
    date = getDate.slice(4, 15)
  }

  const DeleteTodo = (todo) => {
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  }

  const AddNewTodo = () => {
    var lastTodoId = 1
    if (todos.length > 1) {
      lastTodoId = todos[todos.length - 1].id
    }
    var Day = new String(date + ", " + time)
    var Title = TitleRef.current.value
    var Description = DescriptionRef.current.value
    if (Title === "" || Description === "") {
      setErrorText("Title or Description cannot be empty!")
      return
    }
    else if (time == null || date == null) {
      setErrorText("Date or Time cannot be empty!")
      return
    }
    setTodos(prevTodos => {
      return [...prevTodos, {id: lastTodoId + 1, day: Day, title: Title, description: Description}]
    })
    TitleRef.current.value = null
    DescriptionRef.current.value = null
    document.getElementById("appt").value = null
    document.getElementById("date").value = null
    setErrorText("")
  }

  useEffect(() => { //Loading Saved todo
    const loadTodos = JSON.parse(localStorage.getItem(Local_Storage_Key))
    if (loadTodos) setTodos(loadTodos)
  }, [])

  useEffect(() => { //Saving todos
    localStorage.setItem(Local_Storage_Key, JSON.stringify(todos))
  }, [todos])

  return (
    <>
    <Header title="Sticky Header" />
    <AddToDoForm titleRef={TitleRef} descriptionRef={DescriptionRef} error={errortext} addNewTodoFunc={AddNewTodo} setDateFunc={SetDate} setTimeFunc={SetTime}/>
    <Todo todos={todos} deleteTodoFunc={DeleteTodo}/>
    </>
  );
}

export default App;
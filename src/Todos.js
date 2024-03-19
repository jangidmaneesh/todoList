import React, { useEffect, useState } from 'react'
const todoList = [
    {
        id:1,
        todoName: "Attend meeting1",
        completed: false
    },
    {
        id:2,
        todoName: "Attend meeting2",
        completed: false
    },
    {
        id:3,
        todoName: "Attend meeting3",
        completed: false
    },
    {
        id:4,
        todoName: "Attend meeting4",
        completed: false
    },
    {
        id:5,
        todoName: "Attend meeting5",
        completed: false
    },
    {
        id:6,
        todoName: "Attend meeting6",
        completed: false
    },
]

const Todos = () => {
    const [todoListItem, setTodoListItem] = useState(todoList);
    const handleDelete = (deletedId) => {
        const dlTodoList = todoListItem.filter((item)=> item.id !== deletedId);
        setTodoListItem(dlTodoList)
    }
    const handleCompleted = (completedId) => {
        const updatedTodoList = todoListItem.map(item => {
            if (item.id === completedId) {
                return { ...item, completed: true };
            }
            return item;
        });
    
        setTodoListItem(updatedTodoList);
        // console.log("updatedTodoList", updatedTodoList)
    }
    const [newTodo, setNewTodo] = useState([])
    useEffect(()=> {
        const newArray = todoList.concat(newTodo);
        // Or
        // const newArray = [...array1, ...array2];
        setTodoListItem(newArray);
    }, [newTodo])
    const [showTodoForm, setShowTodoForm] = useState(false)
    const [createTodoInput, setCreateTodoInput] =  useState("")
    console.log("newTodo", newTodo)
    const handleCreateTodo = () => {
        setShowTodoForm(!showTodoForm);
    }
    const handleSubmitTodo = () => {
        setShowTodoForm(false);
        setNewTodo({
            id:todoList[todoList.length - 1],
            todoName: createTodoInput,
            completed: false
        })
    }
    return (
        <>
        {console.log("todoListItem", todoListItem)}
        {/* {console.log("todoList", todoList)} */}
        <div style={{padding: "0 0"}}>
            {/* <form> */}
                <div className="todo-list">
                    <div className='d-flex align-items-center'>
                        <legend className="todo-list__title mb-0">Todo List</legend>
                        <div>
                            <button type='button' className='add-icon' onClick={handleCreateTodo} title='Create New Todo'>
                                <span>+</span>
                            </button>
                        </div>
                    </div>
                    <div className={`${!showTodoForm ? "d-none" : " p-5"}`}>
                        <div style={{margin:"0 auto", maxWidth: "550px"}}>
                            <h4 className='text-white'>Create Todo</h4>
                            <div className='form-group mb-3'>
                                <input type='text' className='form-control' 
                                    value={createTodoInput} 
                                    onChange={(event)=>setCreateTodoInput(event.target.value)}
                                />
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-md btn-primary' type='button' onClick={handleSubmitTodo}>Submit</button>
                            </div>
                        </div>
                    </div>
                    {todoListItem?.map((todo)=>
                        <div key={todo.id} className={`todo-list__label d-flex align-items-center justify-content-between  ${todo.completed ? "completed" : ""}`}>
                            <span>{todo.todoName}</span>
                            <div className='d-flex align-items-center'>
                                <button type='button' className='btn btn-sm btn-danger' onClick={()=>handleDelete(todo.id)}>Delete</button>
                                <button type='button' className='btn btn-sm btn-success ms-2' onClick={()=>handleCompleted(todo.id)}>Completed</button>
                            </div>
                        </div>
                    )}
                    
                    {/* <label className="todo-list__label d-flex align-items-center justify-content-between">
                        
                        <span>Complete Assignment</span>
                        <div className='d-flex align-items-center'>
                            <button type='button' className='btn btn-sm btn-danger'>Delete</button>
                            <button type='button' className='btn btn-sm btn-success ms-2'>Completed</button>
                        </div>
                    </label>
                    <label className="todo-list__label d-flex align-items-center justify-content-between">
                        
                        <span>Finish design for new website</span>
                        <div className='d-flex align-items-center'>
                            <button type='button' className='btn btn-sm btn-danger'>Delete</button>
                            <button type='button' className='btn btn-sm btn-success ms-2'>Completed</button>
                        </div>
                    </label>
                    <label className="todo-list__label d-flex align-items-center justify-content-between">
                        
                        <span>Go to gym</span>
                        <div className='d-flex align-items-center'>
                            <button type='button' className='btn btn-sm btn-danger'>Delete</button>
                            <button type='button' className='btn btn-sm btn-success ms-2'>Completed</button>
                        </div>
                    </label> */}
                </div>
            {/* </form> */}
            </div>
        </>
    )
}

export default Todos
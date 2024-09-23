import { useState, useRef } from "react"; // import useState

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function Todolist() {
    // define state for elements and an array to contain those elements
    // todo is an object with 2 keys description and duedate
    const [todo, setTodo] = useState({ description: "", duedate: "", priority: "" });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const [colDefs, setColDefs] = useState([
        { field: "description", filter: true, floatingFilter: true },
        { field: "priority", filter: true, floatingFilter: true },
        { field: "duedate", filter: true, floatingFilter: true },
    ]);

    // function to handle the "Add Todo" button
    // will send an alert if one or both input field is empty
    // otherwise, proceed to append the new todo to the todos array and empty the 2 input fields
    const handleAdd = () => {
        if (!todo) {
            alert("Type something first");
        } else {
            setTodos([todo, ...todos]);
            setTodo({ description: "", duedate: "", priority: "" });
        }
    };

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        } else {
            alert('Select a row first!')
        }
    };

    return (
        <>
            <h3>Simple Todolist</h3>
            {/* set state for the todo input */}
            <div className="box">
                <div className="box-content">
                    <div className="box-text">Add Todo:</div>

                    <label>Description: </label>
                    <input
                        placeholder="Type description"
                        value={todo.description}
                        onChange={event => setTodo({ ...todo, description: event.target.value })}
                    />

                    <label>Priority: </label>
                    <input
                        placeholder="Type description"
                        value={todo.priority}
                        onChange={event => setTodo({ ...todo, priority: event.target.value })}
                    />

                    <label>Date: </label>
                    <input
                        type="date"
                        value={todo.duedate}
                        onChange={event => setTodo({ ...todo, duedate: event.target.value })}
                    />

                    <button onClick={handleAdd}>Add Todo</button>
                    <button onClick={handleDelete}>Delete</button>

                    <div className='ag-theme-material' style={{ height: 500, width: '100%' }}>
                        <AgGridReact
                            ref={gridRef}
                            onGridReady={params => gridRef.current = params.api}
                            rowData={todos}
                            columnDefs={colDefs}
                            rowSelection="single"
                        />
                    </div>

                </div>
            </div>

        </>
    );
}

export default Todolist;
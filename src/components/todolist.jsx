import { useState } from "react"; // import useState
import TodoTable from "./TodoTable";

function Todolist() {
    // define state for elements and an array to contain those elements
    // todo is an object with 2 keys description and duedate
    const [todo, setTodo] = useState({ description: "", duedate: "" });
    const [todos, setTodos] = useState([]);

    // function to handle the "Add Todo" button
    // will send an alert if one or both input field is empty
    // otherwise, proceed to append the new todo to the todos array and empty the 2 input fields
    const handleAdd = () => {
        if (!todo) {
            alert("Type something first");
        } else {
            setTodos([todo, ...todos]);
            setTodo({ description: "", duedate: "" });
        }
    }

    const handleDelete = (row) => {
        console.log("Delete: " + row);
        // Boolean value to filter the row, the delete row will be exluded from the new array
        // row index 1 match index 1, row != index is false, row 1 will be excluded from the new array
        setTodos(todos.filter((_, index) => row != index));
    }

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

                    <label>Date: </label>
                    <input
                        type="date"
                        value={todo.duedate}
                        onChange={event => setTodo({ ...todo, duedate: event.target.value })}
                    />

                    <button onClick={handleAdd}>Add Todo</button>

                    {/* render the TodoTable component */}
                    <TodoTable todos={todos} handleDelete={handleDelete} />

                </div>
            </div>

        </>
    );
}

export default Todolist;
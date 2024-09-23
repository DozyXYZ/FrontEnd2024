import { useState } from "react"; // import useState

function Todolist() {
    // define state for elements and an array to contain those elements
    // todo is an object with 2 keys description and duedate
    const [todo, setTodo] = useState({ description: "", duedate: "", priority: "" });
    const [todos, setTodos] = useState([]);

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

                    {/* need to render the todos, handleDelete to the todotable <Todotable todos={todos} handleDelete={handleDelete} /> */}

                    <table>
                        <tbody>
                            <tr><th>Due Date</th><th>Description</th></tr>
                            {
                                todos.map((todo, index) =>
                                    <tr key={index}>
                                        <td>{todo.duedate}</td>
                                        <td>{todo.description}</td>
                                        <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>

        </>
    );
}

export default Todolist;
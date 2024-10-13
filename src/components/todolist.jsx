import { useState, useRef } from "react"; // import useState

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Todolist() {
    // define state for elements and an array to contain those elements
    // todo is an object with 2 keys description and duedate
    const [todo, setTodo] = useState({ description: "", duedate: "", priority: "" });
    const [todos, setTodos] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const gridRef = useRef();

    const [colDefs] = useState([
        { field: "description", filter: true, floatingFilter: true },
        {
            field: "priority", filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: "red" } : { color: "black" }
        },
        { field: "duedate", filter: true, floatingFilter: true },
    ]);

    // function to handle the "Add Todo" button
    // will send an alert if one or both input field is empty
    // otherwise, proceed to append the new todo to the todos array and empty the 2 input fields
    const handleAdd = () => {
        if (!todo.description || !todo.duedate || !todo.duedate) {
            alert("Please fill in all fields!");
        } else {
            setTodos([todo, ...todos]);
            setTodo({ description: "", duedate: "", priority: "" });
        }
    };

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id));
        } else {
            alert('Select a row first!');
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(selectedDate);
        if (date) {
            // convert Datejs object to JavaSrcipt object and then to local time string
            const localString = date.toDate().toLocaleDateString({ day: '2-digit', month: '2.digit', year: 'numeric' });
            console.log(localString)
            // set todo.duedate
            setTodo((todo) => ({ ...todo, duedate: localString }))
        } else {
            setTodo((todo) => ({ ...todo, duedate: '' }));
        }
    };

    return (
        <>

            {/* set state for the todo input */}
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                mt={2}
            >
                <TextField
                    label="Description"
                    value={todo.description}
                    onChange={event => setTodo({ ...todo, description: event.target.value })}
                />


                <TextField
                    label="Priority"
                    value={todo.priority}
                    onChange={event => setTodo({ ...todo, priority: event.target.value })}
                />

                {/* MUI Date Picker set up */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        format="DD/MM/YYYY"

                    />
                </LocalizationProvider>

                {/* <TextField
                    label="Date"
                    value={todo.duedate}
                    onChange={event => setTodo({ ...todo, duedate: event.target.value })}
                /> */}

                <Button
                    variant="contained"
                    color="success"
                    startIcon={<AddIcon />}
                    onClick={handleAdd}>Add Todo
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    endIcon={<DeleteIcon />}
                    onClick={handleDelete}>Delete
                </Button>


            </Stack>
            <div className='ag-theme-material' style={{ height: 500, width: '100%' }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={colDefs}
                    rowSelection="single"
                />
            </div>

        </>
    );
}

export default Todolist;
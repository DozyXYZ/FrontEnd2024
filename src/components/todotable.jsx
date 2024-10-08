// use prop to pass data from parent to child component in React
// flow App -> todolist -> todotable
// () => props.handleDelete(index), pass the index of the row to Delete

function Todotable(props) {
    return (
        <table>
            <tbody>
                <tr><th>Due Date</th><th>Description</th></tr>
                {
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.duedate}</td>
                            <td>{todo.description}</td>
                            <td><button onClick={() => props.handleDelete(index)}>Done</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default Todotable;
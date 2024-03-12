import useStore from "./store.ts";

export const TodoList = () => {
    const todos = useStore(state => state.todos)
    const addTodo = useStore(state => state.addTodo)
    const removeTodo = useStore(state => state.removeTodo)

    const handleAddTodo = () => {
        const text = prompt("Введите текст задачи")
        if (text){
            addTodo(text)
        }
    }
    const handleRemoveTodo = (id: number) => {
        removeTodo(id);
    }

    return(
        <>
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
import {create} from "zustand";

let nextId = 1;
interface Todo{
    id: number;
    text: string;
}
interface TodoStoreState{
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
}

const useStore = create<TodoStoreState>((set) => ({
    todos: [],
    addTodo: (text) => set((state => ({ todos: [...state.todos, {id: nextId++, text}]})
    )),
    removeTodo: (id) => set ((state) => ({todos: state.todos.filter((todo) => todo.id !== id)}))
}))

export default useStore;
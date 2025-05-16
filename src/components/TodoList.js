import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";  

function TodoList() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const q = query(collection(db, "todos"), orderBy("dueDate"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setTodos(data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <AddTodo onAdd={fetchTodos} />
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onRefresh={fetchTodos} />
            ))}
        </div>
    );
}

export default TodoList;



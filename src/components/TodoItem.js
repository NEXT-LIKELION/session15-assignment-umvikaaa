import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState } from "react";

function TodoItem({ todo, onRefresh }) {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [detail, setDetail] = useState(todo.detail);
    const [dueDate, setDueDate] = useState(todo.dueDate);

    const handleUpdate = async () => {
        await updateDoc(doc(db, "todos", todo.id), {
            title,
            detail,
            dueDate,
        });
        setEditing(false);
        onRefresh();
    };

    const handleDelete = async () => {
        await deleteDoc(doc(db, "todos", todo.id));
        onRefresh();
    };

    return editing ? (
        <div className="todo-item">
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <input value={detail} onChange={(e) => setDetail(e.target.value)} />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <div className="todo-buttons">
                <button onClick={handleUpdate}>💾 저장</button>
                <button onClick={() => setEditing(false)}>❌ 취소</button>
            </div>
        </div>
    ) : (
        <div className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.detail}</p>
            <p>📅 {todo.dueDate}</p>
            <div className="todo-buttons">
                <button onClick={() => setEditing(true)}>✏️ 수정</button>
                <button onClick={handleDelete}>🗑 삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;

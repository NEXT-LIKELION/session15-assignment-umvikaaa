import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

function AddTodo({ onAdd }) {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;
        const newTodo = { title, detail, dueDate };
        await addDoc(collection(db, "todos"), newTodo); // docRef 삭제

        onAdd(); // 목록 새로고침
        setTitle("");
        setDetail("");
        setDueDate("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
            />
            <input
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                placeholder="세부사항"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button type="submit">추가</button>
        </form>
    );
}

export default AddTodo;

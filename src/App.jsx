import React from "react";
import { useState } from 'react'
import './App.css'

export default function App() {
    const [text, setText] = useState("");  
    const [todos, setTodos] = useState([]); 

    const [query, setQuery] = useState(""); //for the search box

    function addTodo(){
        const v = text.trim();
        if (!v) return;

        setTodos(prev => [{ id: Date.now(), text: v }, ...prev]);
        setText("");
    }//end of adding to the todo

    function removeTodo(id) {
        setTodos(prev => prev.filter(t => t.id !== id));
    }//end of removing from the todo list
    const filteredTodos = todos.filter(t => t.text.toLowerCase().includes(query.toLowerCase())
);

    return (

    <div style={{ fontFamily: "system-ui", padding: 20, maxWidth: 420 }}>
      <h2>Tiny Todo List</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a task :)"
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={addTodo} style={{ padding: "8px 12px" }}>Add Task</button>
      </div>

<input
  value={query}
  onChange={e => setQuery(e.target.value)}
  placeholder="Search your task ;)"
  style={{ flex: 1, padding: 8, marginBottom: 12 }}
/>


      <ul style={{ paddingLeft: 20 }}>
        {filteredTodos.map(t => (
          <li
            key={t.id}
            style={{
              marginBottom: 8,
              display: "flex",
              gap: 8,
              alignItems: "center"
            }}
          >
            <span style={{ flex: 1 }}>{t.text}</span>
            <button
              onClick={() => removeTodo(t.id)}
              style={{ padding: "4px 8px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <div style={{ color: "#666", marginTop: 8 }}>
          No tasks yet — add one above.
        </div>
      )}
    </div>
  );
}

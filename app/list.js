"use client"

import { useState } from 'react'

export default function List() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const maxCharacters = 30

    const counterColor =
        input.length >= 20 ? "red" :
            input.length >= 15 ? "yellow" : "white"

    function add() {
        if (input.trim() === "") {
            setError("⚠️ Please, fill in this field ⚠️")

            setTimeout(() => {
                setError("")
            }, 5000)
            return
        }

        setTasks([...tasks, input])
        setInput("")
        setError("")
    }
    function clearAll() {
        setInput("")
        setTasks([])
    }
    return (
        <div>
            <h1>To-do list</h1>
            {error && <p className='empty'>{error}</p>}
            <div id='main'>
                {input.length === maxCharacters && <p className='warning'>You've reached the limit of characters</p>}
                <p style={{ color: counterColor }}>
                    {input.length}/{maxCharacters}
                </p>
                <p className='counter'>You have <span>{tasks.length}</span> tasks</p>
                <input type="text" placeholder="Type a task..." value={input} onChange={(e) => setInput(e.target.value)} maxLength={maxCharacters} onKeyDown={(e) => {
                    if (e.key === "Enter") add()
                }} />
                <button onClick={add}>Add</button>
                <button onClick={clearAll}>Clear all</button>
            </div>
            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
            </ul>
        </div>
    )
}
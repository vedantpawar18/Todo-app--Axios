import React from 'react'
import { useState } from 'react'

const AddTodo = ({handleAdd}) => {
    const [text, setText]=useState("");
  return (
    <div>
        <input value={text} onChange={(e)=> setText(e.target.value)} placeholder="Add text" />
        <button onClick={()=>handleAdd(text)}>Add</button>
    </div>
  )
}

export default AddTodo
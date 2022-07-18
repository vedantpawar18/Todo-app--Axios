import React from 'react'

const TodoItem = ({handleDelete,handleToggle,title, id, status}) => {
  return (
    <div style={{display:"flex",margin:"5px", justifyContent:"space-between", gap:"2rem"}}>
        <div>{id}</div>
        <div>{title}</div>
        <button onClick={()=> handleToggle(id, !status)}>{status? "Done":"Not Done"}</button>
        <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoItem
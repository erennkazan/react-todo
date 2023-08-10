import React from 'react'

function Task(props) {

    const deleteClick = () =>{
        props.onDelete(props.id);
        
    }

  return (
    <div className='col-md-4'>
      <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className='btn btn-danger' onClick={deleteClick}>Sil</button>
      </div>
    </div>
  )
}

export default Task

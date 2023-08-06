import React, { useState } from 'react'

function CreateTask() {

const [task,setTask] = useState({
    title:'',
    content:''
})
function detectChange(event){
    console.log(event.target.value)
}
  return (
    <div className='todoDivArea'>
      <form className='todoDiv'>
        <input 
        type="text"
        className='form-control todoText mb-3'
        name='title'
        onChange={detectChange}
        value={task.title}
        placeholder='Başlık'
        />
        <textarea 
        name="content" 
        value={task.content}
        className='form-control todoText mb-3'
        onChange={detectChange}
        rows={3}
        placeholder='İşinizi Yazınız'
        ></textarea>
        <button className='btn btn-primary todoButton'>Ekle</button>
      </form>
    </div>
  )
}

export default CreateTask

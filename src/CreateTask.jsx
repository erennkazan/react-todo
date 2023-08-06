import React from 'react'

function CreateTask() {
  return (
    <div className='todoDivArea'>
      <form className='todoDiv'>
        <input type="text"
        className='form-control todoText mb-3'
        name='title'
        placeholder='Başlık'
        />
        <textarea name="" 
        className='form-control todoText mb-3'
        rows={3}
        placeholder='İşinizi Yazınız'
        ></textarea>
        <button className='btn btn-primary todoButton'>Ekle</button>
      </form>
    </div>
  )
}

export default CreateTask

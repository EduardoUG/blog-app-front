import React from 'react'
import '../assets/styles/components/WriteForm.css'

const WriteForm = () => {
  return (
    <form className='writeForm'>
      <div className='writeFormGroup'>
        <input
          type='text'
          id='imageInput'
          className='writeInput'
          placeholder='Image Url'
        />
      </div>
      <div className='writeFormGroup'>
        <input
          type='text'
          placeholder='Title'
          className='writeInput'
          autoFocus={true}
        />
      </div>
      <div className='writeFormGroup'>
        <textarea
          placeholder='Tell your story'
          className='writeInput writeText'
          type='text'
        ></textarea>
      </div>

      <button className='writeSubmit'>Publish</button>
    </form>
  )
}

export default WriteForm

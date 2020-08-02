import React from 'react'

const Form = ({ handleChange, handleSubmit, form }) => {
  return (
    <form style={{ width: '50%', margin: 'auto' }} onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='title'>Title:</label>
        <input
          onChange={handleChange}
          className='form-control'
          type='text'
          name='title'
          value={form.title}
        ></input>
      </div>
      <label htmlFor='message'>Message:</label>
      <div className='form-group'>
        <input
          className='form-control'
          onChange={handleChange}
          type='text'
          name='message'
          value={form.message}
        ></input>
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default Form

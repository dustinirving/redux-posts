import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

const Form = props => {
  const [form, setForm] = useState({ title: '', message: '' })

  const handleSubmit = e => {
    e.preventDefault()
    props.createPost(form)
    setForm({ title: '', message: '' })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
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
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { createPost })(Form)

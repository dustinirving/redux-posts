import React from 'react'

const Post = ({ title, message, id, handleDelete }) => {
  return (
    <li>
      <div style={{ border: '1px solid black', width: '50%', margin: 'auto' }}>
        <h5>{title}</h5>
        <p>{message}</p>
        <button
          onClick={() => handleDelete(id)}
          className='btn btn-sm btn-danger'
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Post

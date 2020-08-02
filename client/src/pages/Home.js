import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import Post from '../components/Post'
import API from '../utils/API'

const Home = () => {
  const [form, setForm] = useState({ title: '', message: '' })
  const [posts, setPosts] = useState([])

  const loadPosts = () => {
    API.getPosts()
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    API.savePost(form)
      .then(() => loadPosts())
      .then(setForm({ title: '', message: '' }))
      .catch(err => console.log(err))
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleDelete = id => {
    API.deletePost(id)
      .then(() => loadPosts())
      .catch(err => console.log(err))
  }
  return (
    <>
      <div style={{ minHeight: '60vh' }}>
        <ul style={{ textAlign: 'center', listStyle: 'none' }}>
          {posts.map(post => (
            <Post
              title={post.title}
              message={post.message}
              key={post._id}
              id={post._id}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
      <div className='container'>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          form={form}
        />
      </div>
    </>
  )
}

export default Home

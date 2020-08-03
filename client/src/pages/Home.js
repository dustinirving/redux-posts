import React, { useEffect } from 'react'
import Form from '../components/Form'
import Post from '../components/Post'
import { connect } from 'react-redux'
import { getPosts, deletePost, createPost } from '../actions/postActions'

const Home = props => {
  const { posts } = props.posts

  useEffect(() => {
    props.getPosts()
  }, [])

  const handleDelete = id => {
    props.deletePost(id)
  }
  return (
    <>
      <div style={{ minHeight: '60vh' }}>
        <ul style={{ textAlign: 'center', listStyle: 'none' }}>
          {posts.map(({ _id, title, message }) => (
            <Post
              title={title}
              message={message}
              key={_id}
              id={_id}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
      <div className='container'>
        <Form />
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { getPosts, deletePost, createPost })(
  Home
)

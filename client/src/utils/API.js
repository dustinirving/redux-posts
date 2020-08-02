import axios from 'axios'

export default {
  getPosts: () => axios.get('/api/posts'),

  getPost: id => axios.get('/api/posts/' + id),

  deletePost: id => axios.delete('/api/posts/' + id),

  savePost: postData => axios.post('/api/posts', postData)
}

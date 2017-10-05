import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    const { posts } = this.props
    return _.map(posts, post => {
      return (
        <li key={post.id} className='list-group-item'>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    })
  }

  isEmpty (obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) { return false }
    }
    return true
  }

  render () {
    const { posts } = this.props
    return (
      <div>
        <div className='row'>
          <Link to='/posts/new' className='btn btn-primary right'>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        { !this.isEmpty(posts) ? (
          <ul className='list-group'>
            {this.renderPosts()}
          </ul>
        ) : (
          <h2>No Posts added yet</h2>
        )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)

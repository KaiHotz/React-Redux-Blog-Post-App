import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import PostsList from '@/src/components/Posts_list'
import { fetchPosts } from '@/src/actions'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
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
            <PostsList posts={posts} />
          </ul>
        ) : (
          <h2>No Posts added yet</h2>
        )}
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return { posts }
}

export default compose(
  connect(mapStateToProps, { fetchPosts })
)(PostsIndex)

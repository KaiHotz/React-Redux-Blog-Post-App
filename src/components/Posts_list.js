import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'

const PostsList = ({ posts }) => {
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

export default PostsList

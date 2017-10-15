import React, { Component } from 'react'
import { compose } from 'recompose'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '@/src/actions'

class PostsNew extends Component {
  renderField (field) {
    const { meta: { touched, error } } = field
    const className = `form-goup ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        {field.type === 'input' &&
        <input
          className='form-control'
          type='text'
          {...field.input}
        />}
        {field.type === 'textarea' &&
        <textarea
          className='form-control'
          {...field.input}
        />
        }
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          type='input'
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          type='input'
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          type='textarea'
          label='Post Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>
          Cancel
        </Link>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Enter a title'
  }
  if (!values.categories) {
    errors.categories = 'Enter some categorie'
  }
  if (!values.content) {
    errors.content = 'Enter some content please'
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors
}

export default compose(
  connect(null, { createPost }),
  reduxForm({
    validate,
    form: 'PostsNewForm'
  })
)(PostsNew)

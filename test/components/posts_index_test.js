import { renderComponent, expect } from '../test_helper'
import PostsIndex from '../../src/components/posts_index'

describe('Posts Index', () => {
  let component

  beforeEach(() => {
    component = renderComponent(PostsIndex)
  })

  it('renders something', () => {
    expect(component).to.exist
  })
})

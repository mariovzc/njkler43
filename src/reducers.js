const posts = (state = [], action) => {
  if (action.type === 'LOAD_POSTS') {
    return action.posts
  }
  return state
}

export {posts}
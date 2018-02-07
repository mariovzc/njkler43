import posts from './posts'
const loadProducts = () => {
  return {
    type: 'LOAD_POSTS',
    posts
  }
}
export {loadProducts}

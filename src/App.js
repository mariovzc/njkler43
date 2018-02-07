import React, { Component } from 'react'
import posts from './posts'

// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor () {
    super()
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {posts: posts}
  }
  handleOnChange (event) {
    let updatedList = posts
    updatedList = updatedList.filter(item => {
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()
      ) !== -1
    })
    this.setState({posts: updatedList})
  }
  render () {
    return (
      <div>
        <div className='filter'>
          <input type='text' placeholder='Ingresa el término de búsqueda' onChange={this.handleOnChange} />
        </div>
        <ul>
          {this.state.posts.map((post, index) => {
            return (
              <li key={index}>
                <a href={post.url}><img src={post.image} alt={post.title} /></a>
                <p>{ post.title }</p>
              </li>
            )
          })}

        </ul>
      </div>
    )
  }
}

export default App

import React from 'react'
import { render } from 'react-dom'
import SearchParams from './SearchParams';
import { Router } from '@reach/router'
import Details from './Details'
import { Link } from '@reach/router'

const App = () => {
    return (
      <div>
        <header>
          <Link to='/'>Adopt me!</Link>
        </header>
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>      
    )
};

render(<App />, document.getElementById("root"));

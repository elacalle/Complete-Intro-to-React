import  React, { useState }  from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Router } from '@reach/router';
import Details from './Details';
import { Link } from '@reach/router';
import ThemeContext from './ThemeContext';

const App = () => {

  const theme = useState('darkblue');

    return (
      <ThemeContext.Provider value={theme} >
        <div>
          <header>
            <Link to='/'>Adopt me!</Link>
          </header>
          <Router>
            <SearchParams path='/' />
            <Details path='/details/:id' />
          </Router>
        </div>      
      </ThemeContext.Provider>
    )
};

render(<App />, document.getElementById("root"));

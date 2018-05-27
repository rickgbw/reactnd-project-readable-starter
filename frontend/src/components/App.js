import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Category from './Category';
import Post from './Post';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/:category" component={Category} exact />
          <Route path="/:category/:post" component={Post} exact />
        </div>
      </Router>
    );
  }
}

export default App;

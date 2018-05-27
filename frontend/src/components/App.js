import React from 'react';
import { getCategories } from '../api';

class App extends React.Component {
  state = { categories: [] };

  componentDidMount() {
    getCategories().then(categories => {
      console.log(categories);
      this.setState({ categories });
    });
  }

  render() {
    let { categories } = this.state;

    return (
      <div className="App">
        { categories.map(category =>
          <div key={category.name}>
            <a href={'/'+category.path}>{category.name}</a>
          </div>
        ) }
      </div>
    );
  }
}

export default App;

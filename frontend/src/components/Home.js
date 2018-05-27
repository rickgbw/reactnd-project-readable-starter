import React from 'react';
import { getCategories } from '../api';
import { Link } from 'react-router-dom';

class Home extends React.Component {
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
                    <Link to={'/'+category.path}>{category.name}</Link>
                </div>
                ) }
            </div>
        );
    }
}

export default Home;
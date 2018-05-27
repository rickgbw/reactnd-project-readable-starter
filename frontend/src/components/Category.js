import React from 'react';
import { getPosts } from '../api';
import { Link } from 'react-router-dom';

class Category extends React.Component {
    state = { posts: [] };

    componentDidMount() {
        getPosts(this.props.match.params.category)
            .then(posts => this.setState({ posts }));
    }

    render() {
        let { posts } = this.state;
        let { category } = this.props.match.params;

        return (
            <div className="App">
                { posts.map(post =>
                    <div key={post.id}>
                        <Link to={'/'+category+'/'+post.id}>{post.title}</Link>
                    </div>
                ) }
            </div>
        );
    }
}

export default Category;
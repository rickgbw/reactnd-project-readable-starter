import React from 'react';
import { getPost } from '../api';

class Post extends React.Component {
    state = {
        title: '',
        body: '',
    };

    componentDidMount() {
        getPost(this.props.match.params.post)
            .then(({ title, body }) => this.setState({ title, body }));
    }

    render() {
        let { title, body } = this.state;

        return (
            <div>
                <p>
                    <strong>Title:</strong>
                    {title}
                </p>
                <p>
                    <strong>Body:</strong>
                    {body}
                </p>
            </div>
        );
    }
}

export default Post;
const api = 'http://localhost:3001';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories);

export const getPosts = category => {
    if(category) {
        return fetch(`${api}/${category}/posts`, { headers })
            .then(res => res.json());
    } else {
        return fetch(`${api}/posts`, { headers })
            .then(res => res.json());
    }
}

export const addPost = (title, body, author, category) =>
    fetch(`${api}/posts`, { 
        method: 'POST', 
        headers,
        body: JSON.stringify({
            id: 0,
            timestamp: Date.now(),
            title,
            body,
            author,
            category
        })
    })
    .then(res => res.json());

export const getPost = id =>
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json());

export const votePost = (id, option) =>
    fetch(`${api}/posts/${id}`, { 
        method: 'POST', 
        headers,
        body: JSON.stringify({ option })
    })
    .then(res => res.json());

export const editPost = (id, title, body) =>
    fetch(`${api}/posts/${id}`, { 
        method: 'PUT', 
        headers,
        body: JSON.stringify({ title, body })
    })
    .then(res => res.json());

export const delPost = id =>
    fetch(`${api}/posts/${id}`, { method: 'DELETE', headers })
        .then(res => res.json());

export const getComments = id =>
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json());

export const addComment = (body, author, parentId) =>
    fetch(`${api}/comments`, { 
        method: 'POST', 
        headers,
        body: JSON.stringify({
            id: 0,
            timestamp: Date.now(),
            body,
            author,
            parentId
        })
    })
    .then(res => res.json());

export const getComment = id =>
    fetch(`${api}/comments/${id}`, { headers })
        .then(res => res.json());

export const voteComment = (id,option) =>
    fetch(`${api}/comments/${id}`, { 
        method: 'POST', 
        headers,
        body: JSON.stringify({ option })
    })
    .then(res => res.json());

export const editComment = (id,body) =>
    fetch(`${api}/comments/${id}`, { 
        method: 'PUT', 
        headers,
        body: JSON.stringify({
            timestamp: Date.now(),
            body
        })
    })
    .then(res => res.json());

export const delComment = id =>
    fetch(`${api}/comments/${id}`, { method: 'DELETE', headers })
        .then(res => res.json());
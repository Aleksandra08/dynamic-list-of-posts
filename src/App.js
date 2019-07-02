import React from 'react';
import './App.css';
import PostList from './components/PostList'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: [],
            users: [],
            comments: [],
        }
    }

    loadData = async () => {
        const BASE_URL = 'https://jsonplaceholder.typicode.com';
        fetch(`${BASE_URL}/posts`)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        posts: result
                    });
                });


        fetch(`${BASE_URL}/users`)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        users: result
                    });
                });

        fetch(`${BASE_URL}/comments`)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        comments: result
                    });
                });


         setTimeout(() => {
            this.setState({
                isLoaded: true,
            });
        }, 2000);
    };


    render() {
        return (
            <div>
                <h1 className='title'> Dynamic list of posts </h1>
                {this.state.isLoaded ?
                    <PostList posts={this.state.posts} users={this.state.users} comments={this.state.comments}/>
                    :
                    <button
                        className="btn"
                        onClick={this.loadData}>
                      Load
                    </button>
                }
            </div>
        );
    }
}

export default App;

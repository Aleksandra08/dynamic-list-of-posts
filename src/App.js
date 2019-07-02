import React from 'react';
import './App.css';
import PostList from './components/PostList'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            disable: false,
            posts: [],
            users: [],
            comments: [],
        }
    }

    onLoad = () => {
        this.setState(prev => {
            return {
                disable: !prev.disable
            }
        });
        setTimeout(() => {
            this.loadData().then(this.setState({
                isLoaded: true
            }))
        }, 600)
    };


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
                        onClick={this.onLoad}>
                        {this.state.disable ? "Loading..." : "Load"}
                    </button>
                }
            </div>
        );
    }
}

export default App;

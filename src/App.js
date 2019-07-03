import React from 'react';
import './App.css';
import PostList from './components/PostList'
import {getPosts, getUsers, getComments} from "./api/getData";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            disable: false,
            posts: [],
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


    async loadData() {
        const [posts, users, comments] = await Promise.all([getPosts(), getUsers(), getComments()]);
        let postWithAllData = posts.map((post) => {
            return {
                ...post,
                user: users.find(user => user.id === post.userId),
                comments: comments.filter(comment => comment.postId === post.id)
            }
        });
        this.setState({
            posts: postWithAllData,
        })

    };

    render() {
        return (
            <div>
                <h1 className='title'> Dynamic list of posts </h1>
                {this.state.isLoaded ?
                    (<PostList posts={this.state.posts}/>)
                    :
                    (<button
                        className="btn"
                        onClick={this.onLoad}>
                        {this.state.disable ? "Loading..." : "Load"}
                    </button>)
                }
            </div>
        );
    }
}

export default App;

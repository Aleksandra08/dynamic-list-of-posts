import React from 'react';
import User from './User'
import CommentList from './CommentList'


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showListComments: false
        }
    }

    showComments = () => {
        this.setState({
            showListComments: !this.state.showListComments
        })
    };


    render() {
        return (
            <div className="post">
                <h2 className='post__title'>{this.props.post.title}</h2>
                <p className='post__body'> {this.props.post.body}</p>
                <User user={this.props.post.user}/>
                <button className="post__comment_btn"
                        onClick={this.showComments}>
                    Comments
                </button>
                {this.state.showListComments ? <CommentList comments={this.props.post.comments}/> : null}
            </div>
        )
    }
}

export default Post;
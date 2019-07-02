import React from 'react';
import User from './User'
import CommentList from './CommentList'


function Post(props) {
    const user = props.user.find(el => el.id === props.post.userId);
    const comments = props.comments.filter(el => el.postId === props.post.userId);

    return (
        <div className="post">
            <h2 className='post__title'>{props.post.title}</h2>
            <p className='post__body'> {props.post.body}</p>
            <User user={user}/>
            <CommentList comments={comments}/>
        </div>
    )
}

export default Post;
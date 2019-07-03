import React from 'react';
import User from './User'
import CommentList from './CommentList'


function Post({post}) {

    return (
        <div className="post">
            <h2 className='post__title'>{post.title}</h2>
            <p className='post__body'> {post.body}</p>
            <User user={post.user}/>
            <CommentList comments={post.comments}/>
        </div>
    )
}

export default Post;
import React from 'react';
import Comment from './Comment'

function CommentList(props) {
    return (
        <Comment comments={props.comments}/>
    )
}

export default CommentList;
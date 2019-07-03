import React from 'react';
import Comments from './Comments'

function CommentList({comments}) {
    return (
        <Comments comments={comments}/>
    )
}

export default CommentList;
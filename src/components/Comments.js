import React from 'react';

function Comments({comments}) {
    return (
        <div>
            <h2 className='post__comment_title'>Comments:</h2>
            {comments.map(comment => {
                return (
                    <div key={comment.id} className='post__comment'>
                        <div className="post__comment-autor">
                            <div> {comment.name} </div>
                            <a href="#" className="post__comment-link"> {comment.email} </a>
                        </div>
                        <div> {comment.body} </div>
                    </div>
                )
            })}
        </div>
    )
}


export default Comments;
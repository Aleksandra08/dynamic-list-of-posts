import React from 'react';

//ключ в 12 строке добавила, но предупреждение все равно показывает, что делаю не так?

function Comment(props) {
    return (
        <div>
            <h2>Comments:</h2>
            {props.comments.map(el => {
                return (
                    <>
                        <div key={el.id} className='post__comment'>
                            <div className="post__comment-autor">
                                <span> {el.name} </span>
                                <a href="#"> {el.email} </a>
                            </div>
                            <div> {el.body} </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}


export default Comment;
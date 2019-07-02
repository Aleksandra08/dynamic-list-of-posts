import React from 'react';
import Post from './../components/Post'


function PostList(props) {
    return (
        <div className='list'>
            {props.posts.map(el =>
                <Post post={el}
                      key={el.id}
                      user={props.users}
                      comments={props.comments}
                />
            )}
        </div>
    );
}

export default PostList;
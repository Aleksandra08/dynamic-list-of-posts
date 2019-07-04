import React from 'react';
import Post from './../components/Post'


function PostList({posts, filter}) {
    return (
        <div className='list'>
            <input className='filter-field'
                   placeholder='enter posts title...'
                   type="text"
                   onChange={filter}
            />

            {posts.map(post =>
                <Post post={post}
                      key={post.id}
                />
            )}
        </div>
    );
}

export default PostList;
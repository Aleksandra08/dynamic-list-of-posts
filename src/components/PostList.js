import React from 'react';
import Post from './../components/Post'


function PostList({posts}) {
    return (
        <div className='list'>
            {posts.map(post =>
                <Post post={post}
                      key={post.id}
                />
            )}
        </div>
    );
}

export default PostList;
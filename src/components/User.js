import React from 'react';

function User({user}) {
    return (
        <div className='post__users-data'>
            <h2 className='post__users-data_autor'>Autor:</h2>
            <div>
                <div>{user.name}</div>
                <div>{user.username}</div>
                <div>{user.email}</div>
            </div>
        </div>
    )
}

export default User;
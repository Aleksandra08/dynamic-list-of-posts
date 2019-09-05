import React from 'react';

function User({user}) {
    return (
        <div className='post__users-data'>
            <h4 className='post__users-data_autor'>Autor:</h4>
            <div>
                <div>{user.name}</div>
                <div>{user.username}</div>
                <div>{user.email}</div>
            </div>
        </div>
    )
}

export default User;
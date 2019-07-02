import React from 'react';

function User(props) {
    return (
        <div className='post__users-data'>
            <h2>Autor:</h2>
            <div>
                <div>{props.user.name}</div>
                <div>{props.user.username}</div>
                <div>{props.user.email}</div>
            </div>
        </div>
    )
}

export default User;
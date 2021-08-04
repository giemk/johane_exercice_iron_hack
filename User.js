import React, { Component } from 'react';

function User(props)  {
 
    return (
        <div>
            <h2 style={{backgroundColor: props.color}}>Bonjour, {props.firstName}</h2>

            <h2>Bienvenue à {props.bootcamp}</h2>
            <img src={props.avatarUrl} width="350" height="350" alt="logo campus"/>

        </div>
    )
};


export default User;
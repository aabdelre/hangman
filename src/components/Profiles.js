import React from 'react'

function Item({name, score}) {
    return (
        <div className='flex'>
        <div className='item'>
            <div className='info'>
                <h3 className='name'> Name: {name} </h3>
                <span>Score: {score}</span>
            </div>
        </div>
        </div>
    )
}

export default function Profiles() {
    return (
        <div className='profile'>
           {Item("ali", 0)}
        </div>
    )
}

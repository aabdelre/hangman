import React from 'react'

function Header({ user }) {
  return (
    <>
        <h1> Welcome, {user}! </h1>
        <p> Find the hidden word - Enter a letter! </p>
    </>
  )
}

export default Header
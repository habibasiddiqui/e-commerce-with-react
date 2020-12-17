import React from 'react'

function Welcome({handleSignOut}) {
    return (
        <div>
            <h1>Welcome 
            </h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default Welcome

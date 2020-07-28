import React from 'react'

function Person1({person}) {
    return (
        <div>
             <h2>
              My name is {person.name} and i know about {person.skill}
            </h2>
        </div>
    )
}

export default Person1

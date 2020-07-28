import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}, i am {person.age} Years Old , and i am is {person.skill} Developer</h2>
        </div>
    )
}

export default Person

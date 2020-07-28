import React from 'react'

// function Greet() {
//     return <h1 > Hello Khilmi Aminudin < /h1>
// }

const Greet = props => {
    const {name, lastName} = props
    return (
        <div>
            <h1>Hello {name} {lastName}</h1>
            {props.children}
        </div>
        )
}
export default Greet
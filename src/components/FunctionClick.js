import React from 'react'

function FunctionClick() {
    function buttonHandler(){
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick={buttonHandler}>Click</button>
        </div>
    )
}

export default FunctionClick

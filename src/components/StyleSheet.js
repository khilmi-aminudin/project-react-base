import React from 'react'
import './MyStyles.css'

function StyleSheet(props) {
    
    let classn = props.primary ? 'primary' : ''
    return (
        <div>
            <h2 className={`${classn} font-x`} >Style Sheet</h2>
        </div>
    )
}

export default StyleSheet

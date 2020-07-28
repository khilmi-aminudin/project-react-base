import React from 'react'
import Person1 from './Person1'
import Person from './Person'

function NameLiist1() {
    const persons = [
        {
            id :1,
            name : 'Khilmi',
            age : 22,
            skill : 'React' 
         },
         {
            id :2,
            name : 'Fathi',
            age : 9,
            skill : 'Angular'  
         },
         {
            id :3,
            name : 'Faza',
            age : 4,
            skill : 'Vue' 
         }
    ]

    const names = ['Bruce','Clark','Diana','Peter']
    // const personList = persons.map(person => (
    //        <Person1 key={person.id} person={person}/>
    //     ))
    const nameList = names.map((name,index) => <h1 key={index}>{name}</h1>)
    return (
        <div>
            {/* {personList} */}
            {nameList}
        </div>
    )
}

export default NameLiist1

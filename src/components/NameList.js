import React from 'react'
import Person from './Person'

function NameList() {
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

    const names = ['Khilmi','Fathi','Faza','Khilmi']
    const personList = persons.map(person => <Person key={person.id} person={person}/>) 

const nameList = names.map((name,index) => <h2 key={index} >{name}</h2>)
    return (
        <div>
            {/* {personList} */}
            {nameList}
        </div>
    )
}

export default NameList

import React, { useState } from 'react'

function USWithObject() {
    let obj = {
        name: "Hafeez",
        age: 25,
        height: 5.7,
        isYoung: true
    }
    let [person, setPerson] = useState(obj);
    let changeState = () => {
        setPerson(previousState =>{
            return {
                ...previousState,
                name: "Khan"
            }
        });


        // setPerson({
        //     name: "khan",
        //     age: 30,
        //     height: 7.9,
        //     isYoung: false
        // });
    }
  return (
    <div>
<h1>{person.name}</h1>
<h1>{person.age}</h1>
<h1>{person.height}</h1>
<h1>{person.isYoung.toString()}</h1>
<button onClick={changeState}>Change</button>

    </div>
  )
}

export default USWithObject

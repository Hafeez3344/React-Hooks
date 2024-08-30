import React, { useState } from 'react'

function USComponent() {
   let myArray = useState("Hafeez")
   let changeState = () => {
    myArray[1] ("khan")
   }
  return (
    <div>
      <h1>{myArray[0]}</h1>
      <button onClick={changeState}>Update</button>
    </div>
  )
}

export default USComponent













// import React, { useState } from 'react'

// function USComponent() {
//    let myArray = useState("Hafeez")
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={() => myArray[1]("Khan")}>Update</button>
//     </div>
//   )
// }

// export default USComponent

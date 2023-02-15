import React, {useState} from 'react'

function Amit() {
    const [college, setCollege] = useState("");
    console.log(college)

  return (
    <div className='main-box'>
     <div className='user-box'>
        
    </div>
    <div className='college-box'>
        <label>College:</label>
        <input 
        type="text"
        placeholder='Enter College'
        value={college}
        onChange={(e)=> setCollege(e.target.value)} />

    </div>
    </div>

  )
}

export default Amit
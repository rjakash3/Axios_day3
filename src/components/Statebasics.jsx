import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var fname="Akash"
    var [name,setName] = useState("Akash")
    var [value,setValue]=useState()

    const changeName=()=>{
        console.log("Clicked")
        setName(value)
    }

    const InputHandler=(e)=>{
            console.log(e.target.value)
            setValue(e.target.value)
    }
  return (
    <div>Statebasics
        <Typography variant='h4'>Welcome {name}</Typography>
        <TextField label="Enter Name" variant='outlined' onChange={InputHandler}/><br/>
        <Button variant='contained' color='error' onClick={changeName}>Change</Button>
    </div>
  )
}

export default Statebasics
import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [Value,setValue]=useState(0)

    const fName=()=>{
        console.log("Clicked")
        setValue(Value+1)
    }
        const sName=()=>{
            if(Value>0)
            setValue(Value-1)
    }


  return (
    <div>
        <Typography variant='h4'>Count:{Value}</Typography>
        <Button variant='contained' color='success' onClick={fName}>+</Button>&nbsp;&nbsp;
        <Button variant='contained' color='error' onClick={sName}>-</Button>

    </div>
  )
}

export default Counter
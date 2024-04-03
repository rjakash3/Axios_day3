import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [Name,setName]=useState(" ")

    const changeHname=()=>{
        setName("Home")
    }

    const changeGname=()=>{
        setName("Gallery")
    }

    const changeCname=()=>{
        setName("Contact")
    }

useEffect(()=>{
    changeGname()
},[])
  return (
    <div>
        <Typography variant='h4'>Welcome to {Name}</Typography><br/><br/>
        <Button variant='contained' color='success' onClick={changeHname}>Home</Button>
        <Button variant='contained' color='error' onClick={changeGname}>Gallery</Button>
        <Button variant='contained' color='success' onClick={changeCname}>Contact</Button>

    </div>
  )
}

export default UseE
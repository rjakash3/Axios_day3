import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Ragistration = () => {
  return (
    <div style={{
        marginTop:"80px"
    }}>................OR...................
        <Typography variant='h3'>Ragistration</Typography>
    <TextField label="Enter nickname" variant='filled'/><br/><br/>
    <TextField label="Phone number" type='number' variant='filled'/><br/><br/>
    <TextField label="Enter Email" type='text' variant='filled'/><br/><br/>
    <TextField label="password" type='password' variant='standard'/><br/><br/>
    <Button variant='contained'color='success'>Ragister</Button>

    </div>
  )
}

export default Ragistration
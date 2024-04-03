import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={
        {
            marginTop:"80px"
        }
                }>
<Typography variant='h2'>login page</Typography><br/>
<TextField  label="Enter name" variant='outlined'/>&nbsp;&nbsp;&nbsp;&nbsp;
<TextField label="Enter password" type='password' variant='outlined'/><br/><br/>
<Button variant='contained' color='error'><Link to={'/signup'} style={{textDecoration:"none"}}>Log In</Link>
</Button><br/><br/>



    </div>
  )
}

export default Login
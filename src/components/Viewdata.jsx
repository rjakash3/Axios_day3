import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewdata = () => {
    var [users,setUsers]=useState([])
    
    useEffect(()=>{
        // axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("https://api.github.com/user")

    .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
    })

    .catch(err=>console.log(err))

    },[])
    
    return (
    <div>
        <Table>
             
             <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                 </TableRow>
            </TableHead>
            <TableBody>
            {users.map((val,i)=>{
                return(
                    
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                            {/* <TableCell>{val.username}</TableCell> */}
                            <TableCell><img height={"100px"} src={val.avatar_url} alt='image'/></TableCell>
                            <TableCell>{val.email}</TableCell>
                        </TableRow>     
                )
            })}
            </TableBody>
        </Table>
    </div>
  )
}

export default Viewdata
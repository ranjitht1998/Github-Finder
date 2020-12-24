import React, { Component } from 'react'
import UserItems from './UserItems'

 const User =({users,loading})=>{
       
                return (
                    <div style={userStyle}>
                        
                        {users.map(user=>(
                            <UserItems key={user.id} user={user}/>
                        ))}
                    </div>
                )

} 

const userStyle={
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:"1rem"
}

export default User;
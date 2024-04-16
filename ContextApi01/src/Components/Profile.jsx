import React from 'react'
import Logincontext from '../Context/Logincontext'
import { useContext } from 'react'

const Profile = () => {
    const {user}=useContext(Logincontext)
   

  
    
        if (!user)  return <div>please login </div> 
        
      return <div>Welcome {user.password}</div>
    
  
}

export default Profile

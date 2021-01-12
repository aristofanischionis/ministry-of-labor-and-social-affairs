import React from 'react'
import {Link} from "react-router-dom"
import {removeUserSession } from '../../utils/Common'

export default function Logout() {
    // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
  }
  
  return (
    <div onClick={handleLogout}>
      <Link to="/">
        <h4>Έξοδος</h4>
      </Link>
    </div>
    )
}
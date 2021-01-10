import React from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import {removeUserSession } from '../../utils/Common'

export default function Logout() {
    // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
  }
  
  return (
    <Button onClick={handleLogout}>
      <Link to="/login">
        <h4>Έξοδος</h4>
      </Link>
      </Button>
    )
}
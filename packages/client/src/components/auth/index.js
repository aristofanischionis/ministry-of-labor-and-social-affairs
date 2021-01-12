import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import Logout from "./Logout"
import { getUser } from "../../utils/Common"

export default function Auth() {
    const user = getUser()
    console.log(user)

    return (
        <div>
            {user ? (
                <Logout />
            ) : (
                <Link to="/login">
                    <h4>Είσοδος</h4>
                </Link>
                )
            }
        </div>
    )
}
// {/* <Icon name="user circle" /> */}
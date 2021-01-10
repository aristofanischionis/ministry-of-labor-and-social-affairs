import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import Logout from "./Logout"
import { getUser } from "../../utils/Common"

export default function Auth() {
    const user = getUser();

    return (
        <div>
            {user ? (
                <Link to="/login">
                    <h4>Log In</h4>
                </Link>
            ) : (
                <Logout />
                )
            }
        </div>
    )
}
// {/* <Icon name="user circle" /> */}
import React from 'react'
import {Icon} from 'semantic-ui-react'
export default function Auth() {
    return (
        // instead of true I have to have a variable loggedin to know if the user is logged in or not
        // NEEDS a lot of work!!!!!!!
        <div>
            {true ? (
                <Icon name="user circle" />
            ) : (
                <Icon name="user circle" />
            )
            }
        </div>
    )
}
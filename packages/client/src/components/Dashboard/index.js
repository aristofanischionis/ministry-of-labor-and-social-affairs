import React from 'react'
import { getUser } from '../../utils/Common';

export default function Dashboard() {
    const user = getUser();
    return <div>
        I am a secured Dashboard, hello {user.first_name}
    </div>
}
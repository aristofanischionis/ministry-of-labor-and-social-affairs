import React from "react"
import Path from "../Path"

const sections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'Info', content: 'Info', active: true }
]
  
export default function Info() {
    return (
        <div>
            <Path sections={sections} />
            <h2>Info</h2>
        </div>
    )
}

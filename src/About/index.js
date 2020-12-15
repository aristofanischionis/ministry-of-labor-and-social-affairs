import React from "react"
import Path from "../Path"

const sections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'About', content: 'About', active: true }
]
  
export default function About() {
    return (
        <div>
            <Path sections={sections} />
            <h2>About</h2>
        </div>
    )
}

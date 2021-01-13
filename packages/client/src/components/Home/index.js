import React from "react"
import HomeTabs from "./HomeTabs"
import HomeGrid from "./HomeGrid"
import HomeCards from "./HomeCards"

// https://react.semantic-ui.com/layouts/homepage/
// homepage example
export default function Home() {
  return <div>
    <HomeCards/>
    <HomeGrid/>
    <HomeTabs/>
  </div>
}

import React from "react"
import superagent from "superagent"
import { Button } from "semantic-ui-react"

async function handleClick(){
  const res = await superagent.get('https://covid-19-greece.herokuapp.com/confirmed')
  const cases_length = res.body.cases.length-1

  const today_max_case  = res.body.cases[cases_length].confirmed
  const before_today_max_case = res.body.cases[cases_length-1].confirmed

  const daily = today_max_case - before_today_max_case
  
  console.log("Daily cases: "+daily)
  // return daily
}

export default function Home() {
  return <div>
    
    <h2>Home</h2>
    <Button negative onClick={handleClick}>COVID Button</Button>
    {/*
    Uncomment if you want to check footer's dynamicotita 
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2> 
    */}

  </div>
}

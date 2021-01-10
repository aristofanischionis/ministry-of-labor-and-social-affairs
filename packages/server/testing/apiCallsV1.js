const { json } = require('body-parser')
const request = require('superagent')

async function register()
{
    //tha prepei na ginetai kalo type checking edw. an kati prepei na dinetai upoxreotika prepei na uparxei elegxos na min einai undifined
    const push_data = {
        first_name: "Manos",
        last_name: "manos",
        email: "manos@gmail.com",
        password: "123456"
    }
    const res = await request.post("http://localhost:3001/api/register" , push_data)
    //console.log(res.body.status)
    return res
}
async function login()
{
    //User data here in order to login.
    const push_data = {
        email: "eima",
        password: "magkas"
    }
    let isValid = false // if he/she is valid he/she can enter. 
    const res = await request.post("http://localhost:3001/api/login" , push_data) //waiting for response
    // console.log(res)

    if(res.text == '{}') // if response text is empty then user does not exist.
        isValid = false
    else
        isValid = true
    
    console.log("User exists: "+isValid)
    return isValid
}
login()
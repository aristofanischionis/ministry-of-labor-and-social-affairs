const { json } = require('body-parser')
const request = require('superagent')

async function register()
{
    //tha prepei na ginetai kalo type checking edw. an kati prepei na dinetai upoxreotika prepei na uparxei elegxos na min einai undifined
    const push_data = {
        first_name: "Manos",
        last_name: "Manos_lastname",
        email: "kostas1@theo.gr",
        password: "password"
    }
    const res = await request.post("https://eam-backend.herokuapp.com/api/register" , push_data)
    console.log("my respo", res)
    return res
}
async function login()
{
    //User data here in order to login.
    const push_data = {
        email: "manos@gmail.com",
        password: "password"
    }
    let isValid = false // if he/she is valid he/she can enter. 
    const res = await request.post("https://eam-backend.herokuapp.com/api/login" , push_data) //waiting for response
    console.log(res)

    if(res.text == '{}') // if response text is empty then user does not exist.
        isValid = false
    else
        isValid = true
    
    console.log("User exists: "+isValid)
    return isValid
}
register()
// login()
const request = require('superagent')

async function register()
{
    const push_data = {
        first_name: "Lakis",
        last_name: "Lalakis",
        email: "lalakis@gmail.com",
        password: "123456",
    }
    const res = await request.post("http://localhost:3001/api/register" , push_data)
    console.log(res.status)
    //return 200
}
register()
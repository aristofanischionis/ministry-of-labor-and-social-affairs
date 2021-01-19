# Here will be the instructions on how to build and deploy the server using docker containers
<!-- I have put the env variables in the heroku config, it's the correct and safe way to go -->

* Navigate to this folder in your terminal
* `heroku login`
* `heroku container:login`
* `heroku container:push web --app eam-backend`
* `heroku container:release web --app eam-backend`
* Enjoy the deployed version in: `https://eam-backend.herokuapp.com/`
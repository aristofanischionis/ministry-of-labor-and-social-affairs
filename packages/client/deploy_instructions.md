# Here will be the instructions on how to build and deploy the client side using docker containers

* Navigate to this folder in your terminal
* `heroku login`
* `heroku container:login`
* `heroku container:push web --app ypakp-gr`
* `heroku container:release web --app ypakp-gr`
* Enjoy the deployed version in: `https://ypakp-gr.herokuapp.com/`
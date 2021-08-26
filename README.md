To run this application on local, you need to set up your environment. 

First, be sure you have postgres and elasticsearch installed on your machine. 

Then, download the "recipe-manager-api" project. At the root of your project, run these command lines : 
- bundle install
- rails db:create
- rails db:migrate
- rails s

Finally, download the "recipe-manager-front" project and at the root of your repository, run these command lines : 
- yarn install
- yarn start

If you have an error in your console about this dependency "Angular token", you'll need to temporary update the specified files in node_module package.

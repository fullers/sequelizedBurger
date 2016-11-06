# Eat Da Burger!
This is a full-stack web application that uses Node.js, Express, Handlebars (HTML Temaplate), and Sequelize for MySQL.  This application allows a user to enter and submit a name of burger they want to eat then place that burger in a list on the left side, then give the user the ability to devour the burger by pressing the **Devour it!** button.  Once devour then burger will show in a list on the right side.

You may go to [https://fullers-sequelizedBurger.herokuapp.com](https://fullers-sequelizedBurger.herokuapp.com) to view a demo of the application.


## Technologies used
The following technologies, tools, and npm packages were used:
* Node.js
* Javascript/Jquery
* NPM Packages
	* express
	* body-parser  
	* express-handlebars
	* handlebars
	* mysql
	* Sequelize
	* Sequelize-cli
* MVC Desgin
* Object Relational Mapping (ORM)
* MySQL and JawsDB 


## Files and Folder Structure

* **server.js** - File used to start the node.js web server.
* **package.json** - File used to insta the npm packages.
* **.gitignore** - File used to ignore the node_modules folder used by NPM.
* **config** - Folder to with connect.js and orm.js
	* config.json - Sets connection to SQL Database for developement and Production (JawsDB)
* **controllers** - Folder to store controller files
	* burger_controller.js - File where you create all the functions that will do the routing for your app, and the logic of each route.
* **db** - Folder to store sql files
	* schema.sql - File to create database and table for the database.
	* seeds.sql - File that inserts default data into the database table.
* **migrations** - Folder to store migration files
	* 20161102224411-create-burger.js - File that creates the burgers table in the SQL Database.
	* 20161105222118-insert-burgers.js - File that populates data in the burgers table.
* **models** - Folder to house your model files.
	* burger.js - File created by sequelize model create that sets up the table in SQL DB.
* **public** - Folder to store any files the browser needs to access.
	* **assets** - Folder to store CSS and Images
		* **css** - Sub folder to store css files.
			* burger_style.css - File used to create the CSS needed for the application.
		* **img** - Sub folder to store image files.
			*burger.png - image used for the header 
			*screenshot2.png - image used for this README.md

## Requirements

Create a DB called burgers2_db

You will need to edit a file called config.json and replace the following code, replacing **Your username**, **Your Password**, and **Your DB** with the appropriate information:

```javascript

{
  "development": {
    "username": "Your Username",
    "password": "Your Password",
    "database": "burgers2_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "Your Username",
    "password": "Your Password",
    "database": "Your DB",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "Your Username",
    "password": "Your Password",
    "database": "Your DB",
    "host": "localhost",
    "dialect": "mysql"
  }
}

```

## Getting Started

* Use git clone to copy this git hub 

* Open the command line and navigate to the folder when you cloned the files
	* Run npm install to install dependencies.  
	* Use the command `sequelize db:migrate` to create your SQL Database and populate initial data.
	* Use run server.js to start the application.
* use localhost:3000 in your browser to access this application.

### Eat Da Burger Da-Sequel! - Home Page

![Alt Text](/public/assets/img/screenshot2.png?raw=true "Eat Da Burger Da-Sequel! Home Page")

When you are on the home page you may enter a burger you would like to eat in the textarea and click submit.  Then the burger will be inserted into the database and show up on the left hand side.  If you click on the **Devour it!** button then it will show up on the right hand side. 

## Authors

* **Shaun** - * Javascript, Node.js, Express, Handlebars (HTML Templates), Sequelize, MySQL*

## License
   
   None 
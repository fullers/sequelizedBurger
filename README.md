# Eat Da Burger!
This is a full-stack web application that uses Node.js, Express, Handlebars (HTML Temaplate), and MySQL.  This application allows a user to enter and submit a name of burger they want to eat then place that burger in a list on the left side, then give the user the ability to devour the burger by pressing the **Devour it!** button.  Once devour then burger will show in a list on the right side.

You may go to [https://fullers-eatdaburger.herokuapp.com](https://fullers-eatdaburger.herokuapp.com) to view a demo of the application.


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
* MVC Desgin
* Object Relational Mapping (ORM) 

## Files and Folder Structure

* **server.js** - File used to start the node.js web server.
* **package.json** - File used to insta the npm packages.
* **.gitignore** - File used to ignore the node_modules file used by NPM and connect.js
* **config** - Folder to with connect.js and orm.js
	* connect.js - Sets connection to SQL Database.
	* orm.js - Where you write functions that takes inputs and conditions and turn them into database commands like SQL.
* **controllers** - Folder to store controller files
	* burger_controller.js - File where you create all the functions that will do the routing for your app, and the logic of each route.
* **db** - Folder to store sql files
	* schema.sql - File to create database and table for the database.
	* seeds.sql - File that inserts default data into the database table.
* **models** - Folder to house your model files.
	* burger.js - File where you setup a model for how to interface with the database.
* **public** - Folder to store any files the browser needs to access.
	* **assets** - Folder to store CSS and Images
		* **css** - Sub folder to store css files.
			* burger_style.css - File used to create the CSS needed for the application.
		* **img** - Sub folder to store image files.
			*burger.png - image used for the header 
			*screenshot1.png - image used for this README.md

## Requirements

You will need to creat a file called connect.js and place the following code, replacing **Your username** and **Your Password** with the appropriate information:

```javascript

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'Your username',
	password: 'Your Password',
	database: 'burgers_db'
});

connection.connect(function(err) {

	if (err) throw err;
});

module.exports = connection;

```

## Getting Started

* Use git clone to copy this git hub 
* Use the schema.sql and seeds.sql to create your SQL Database.
* Open the command line and navigate to the folder when you cloned the files
	* Run npm install to install dependencies. 
	* Use run server.js to start the application. 
* use localhost:3000 in your browser to access this application.

### Eat Da Burger! - Home Page

![Alt Text](/public/assets/img/screenshot1.png?raw=true "Eat Da Burger! Home Page")

When you are on the home page you may enter a burger you would like to eat in the textarea and click submit.  Then the burger will be inserted into the database and show up on the left hand side.  If you click on the **Devour it!** button then it will show up on the right hand side. 

## Authors

* **Shaun** - * Javascript, Node.js, Express, Handlebars (HTML Templates), MySQL*

## License
   
   None 
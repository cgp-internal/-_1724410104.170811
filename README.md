Web Server Application README
===========================

Introduction
------------

This is a web server application that provides interactive mapping functionality using Leaflet.js library. The application uses Express.js as the web framework and defines routes for API requests and responses.

How to Run
------------

To run the application, follow these steps:

1. Install Node.js on your system.
2. Clone the repository and navigate to the project directory.
3. Run the command `npm install` to install the dependencies.
4. Run the command `node app.js` to start the server.
5. Open a web browser and navigate to `http://localhost:3000` to access the application.

Application Structure
---------------------

The application is structured into the following directories and files:

* `app.js`: The main entry point for the web server application.
* `routes/`: Defines routes for API requests and responses.
* `controllers/`: Handles API requests and interacts with services and models.
* `models/`: Defines the model schema for storing polygon boundaries.
* `services/`: Provides functionality for processing flight requests based on polygon boundaries.
* `public/`: Serves as the document root for the web application.
* `package.json`: Lists package dependencies and scripts for the project.
* `README.md`: This README file with basic documentation and 'how to run' guide.

Supported Features
-----------------

* Interactive mapping functionality using Leaflet.js library
* API routes for retrieving and processing polygon boundaries
* Service layer for processing flight requests based on polygon boundaries

Dependencies
------------

* Express.js: Web framework for building web applications
* Leaflet.js: Interactive mapping library
* Node.js: JavaScript runtime environment
# The---DRP

Welcome to The DRP App Backend Repo! It is a web application built using the PERN stack (PostgreSQL, Express.js, React.js, and Node.js) that simplifies the process of online shopping. This backend server provides the necessary API endpoints to handle product and category management.

## Table of Contents

- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Development Process](#development-process)
- [Deployment](#deployment)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Key Features

- Add a product: Users can easily add a new product to their favorite category, providing details such as the product's name, description, price, color, size, type, and image URL.
- View all products: Users can browse through a comprehensive list of products in each category.
- Delete a product: Users have the ability to remove a product from a category if needed.
- Update a product: Users can modify the details of an existing product, such as changing the name, description, price, color, size, type, or image URL.

- [Trello Board](https://trello.com/b/mcroqXDk/fullstack-portfolio-project)

## Technologies Used

The DRP App backend leverages the following technologies and frameworks:

- PostgreSQL
- Express.js
- Node.js
- Dotenv
- Nodemon

### Backend Dependencies:

- express: ^4.17.1
- pg: ^8.7.1
- sequelize: ^6.10.0
- sequelize-cli: ^6.2.0

## Project Structure

The project follows a modular structure to ensure code organization and maintainability. It consists of separate frontend and backend directories. The backend utilizes schema and seed files to set up and populate the database with initial data.

## Development Process

To get started with the development of the Modesty Apparel App:

1. One team member creates the repository and sets up the initial project structure.
2. The other team members clone the repository to their local machines.
3. Collaborate using pair programming or assign tasks on the Trello board.
4. Regularly communicate, share progress, and seek assistance when needed.

## Deployment

The backend server is deployed on Render and can be accessed at [The DRP Backend](https://the-drp-backend.onrender.com). The frontend application is deployed on Netlify and can be accessed at [The DRP Frontend](https://starlit-scone-e34993.netlify.app/).

## Installation

To install and run the Modesty Apparel App locally, follow these steps:

1. Clone this repository:
   git clone The Modesty Apparel Backend Repo

2. Navigate to the project directory:
   cd the-table-app

3. Install the backend dependencies:

cd the-table/backend
npm install express pg dotenv nodemon cors --save

4. Install the frontend dependencies:
   npm install

5. Set up the PostgreSQL database by executing the schema and seed files:
   psql -f db/schema.sql
   psql -f db/seed.sql

6. Start the backend server:
   npm start

The backend server will run on [The DRP localhost Backend](http://localhost:3300).

## API Endpoints

- GET /api/categories: Get all categories.
- GET /api/categories/:id: Get a specific category by ID.
- POST /api/categories: Create a new category.
- PUT /api/categories/:id: Update an existing category by ID.
- DELETE /api/categories/:id: Delete a category by ID.

- GET /api/categories/:categoryId/products: Get all products in a category.
- GET /api/categories/:categoryId/products/:productId: Get a specific product in a category.
- POST /api/categories/:categoryId/products: Create a new product in a category.
- PUT /api/categories/:categoryId/products/:productId: Update an existing product in a category.
- DELETE /api/categories/:categoryId/products/:productId: Delete a product in a category.

## License

This project is licensed under [Pursuit](https://www.pursuit.org/).
5:43

# Welcome to The Table Fontend Repo

[Netlify Link](https://starlit-scone-e34993.netlify.app/)

## Table of Contents

- _Technologies used_
- _Frontend Dependencies_
- _License_

## Technologies Used

The DRP App leverages the following technologies and frameworks:

## [Github](https://github.com/)

### Frontend Repo:

[The Frontend Repo](https://github.com/Kendie22/the-drp.git)

## Frontend Frame work

- React.js
- React Router
- Axios

- Canva (for creating beautiful designs)

### Frontend Dependencies:

- react: ^17.0.2
- react-dom: ^17.0.2
- react-router-dom: ^5.3.0
  react-dom
- axios: ^0.21.1

## Installing dependencies frontend

- npm install react react-dom
- npm i react-router-dom axios

# Frontend dependencies

## cd client/the table frontend repo

- npm install

## Set up the environment variables:

- Create a .env file in the project root.
- Define the required environment variables, such as the database connection string, API keys, etc.
- gitnore which allows you to specify files or directories that should be excluded from version control.

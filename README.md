# Express Sequelize Employee Database Seeder

This repository provides a simple setup for seeding a SQLite database with dummy employee data using Node.js, Express, and Sequelize. This project is designed for practicing database seeding and testing basic CRUD operations with an employee dataset.

## Features

- **Node.js and Express**: Provides a REST API setup to interact with the employee database.
- **Sequelize ORM**: Manages models and migrations, supporting SQLite as a lightweight, file-based database.
- **SQLite Database**: No server setup required; utilizes a local file-based database (`database.sqlite`).
- **Bulk Seeding**: A `/seed_db` route that seeds the database with sample employee data.

## Project Structure

- **models/employee.model.js**: Defines the `employee` model to represent employee data.
- **controllers/dataController.js**: Manages database interactions, including seeding and retrieving employee data.
- **lib/index.js**: Sets up Sequelize with SQLite configuration.
- **employeeSeeder.js**: Contains the logic to seed the database with predefined employee data.

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-sequelize-employee-seeder.git
   cd express-sequelize-employee-seeder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   node index.js
   ```
   The server will start on `http://localhost:3000`.

### Usage

To seed the database with employee data:
1. Start the server if it’s not already running.
2. Open a browser or API client (like Postman) and navigate to:
   ```
   http://localhost:3000/seed_db
   ```
3. The response should confirm successful database seeding.

### Sample Employee Data

The seeding script includes an array of employee data with fields:
- **name**: Name of the employee
- **department**: The department where the employee works
- **salary**: Employee’s annual salary (in integer format)
- **designation**: Job title of the employee

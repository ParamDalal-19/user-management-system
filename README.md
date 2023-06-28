# User Management System

This repository contains code for a user management system that allows CRUD (Create, Read, Update, Delete) operations on user data. The system is implemented using Node.js and Express framework, with a MySQL database.

## Installation

1. Clone the repository to your local machine:

```bash
git clone git@github.com:ParamDalal-19/user-management-system.git
```

2. Install dependencies

```bash
npm install
```

3. Configure the database connection:

- Open the database.js file in the database directory.
- Update the MySQL connection details (host, user, password, database) to match your MySQL server configuration.

4. Start the application

```bash
npm start
```

5. Open a web browser and navigate to http://localhost:5000 to access the user management system.

## Usage

The user management system provides the following functionality:

View a list of users with their details (ID, First Name, Last Name, Email, Is Active).
Add a new user.
Edit an existing user.
Delete a user.

When the application is running, you can perform CRUD operations on user data through the web interface.

## Dependencies

`Express`
`MySQL`
`EJS`
`Bootstrap`

## Future Scope

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

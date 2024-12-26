# System Architecture - Inventory Management System (IMS)

## Overview

The IMS follows a layered architecture to separate concerns and facilitate easy maintenance. It consists of a frontend, backend, and database. The system will be built using ReactJS for the frontend, Node.js for the backend, and MySQL as the database.

## Architecture Diagram

![Architecture Diagram](path_to_diagram.png)

## Technologies Used

- **Frontend**: ReactJS for responsive user interfaces.
- **Backend**: Node.js with Express for handling business logic and API requests.
- **Database**: MySQL for persistent data storage.
- **Authentication**: OAuth 2.0 for secure login and authorization.
- **Hosting/Infrastructure**: AWS EC2 for hosting, S3 for storage.

## Components

- **Frontend**: ReactJS handles user input and interacts with the backend APIs to display inventory and reports.
- **Backend**: Node.js processes user requests, interacts with the database, and sends responses.
- **Database**: MySQL stores inventory, user, and transaction data.

## Interaction Between Components

1. The frontend communicates with the backend via REST APIs.
2. The backend retrieves or modifies data in the MySQL database and returns the result to the frontend.
3. The system sends notifications or updates to users as needed.

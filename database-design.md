# Database Design - Inventory Management System (IMS)

## Entity Relationship Diagram (ERD)

![ERD](path_to_erd_diagram.png)

## Tables

### Inventory

| Column Name | Data Type     | Description                  |
| ----------- | ------------- | ---------------------------- |
| item_id     | INT           | Primary Key, Auto Increment  |
| item_name   | VARCHAR(100)  | Name of the inventory item   |
| quantity    | INT           | Available quantity           |
| price       | DECIMAL(10,2) | Price of the item            |
| barcode     | VARCHAR(50)   | Unique identifier for item   |
| created_at  | DATETIME      | Date and time item was added |

### Users

| Column Name   | Data Type                         | Description                 |
| ------------- | --------------------------------- | --------------------------- |
| user_id       | INT                               | Primary Key, Auto Increment |
| username      | VARCHAR(50)                       | Username for login          |
| password_hash | VARCHAR(255)                      | Hashed password             |
| role          | ENUM('Admin', 'Manager', 'Staff') | User role                   |
| created_at    | DATETIME                          | Date the user was created   |

### Transactions

| Column Name      | Data Type         | Description                         |
| ---------------- | ----------------- | ----------------------------------- |
| transaction_id   | INT               | Primary Key, Auto Increment         |
| item_id          | INT               | Foreign Key (Inventory)             |
| quantity         | INT               | Quantity of item in the transaction |
| transaction_type | ENUM('IN', 'OUT') | Type of transaction (in or out)     |
| transaction_date | DATETIME          | Date and time of transaction        |

## Data Flow

- The **Inventory** table holds details about the items in stock.
- The **Users** table manages user credentials and roles.
- The **Transactions** table tracks the movement of inventory (in or out).

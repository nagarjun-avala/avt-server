# Server Routes

Below are the API routes for the Inventory Management System (IMS). All routes are prefixed with `/api`.

---

## 1. **Admin Routes**

| Operation | Route             | HTTP Method |
| --------- | ----------------- | ----------- |
| Create    | `/api/admins`     | `POST`      |
| Read All  | `/api/admins`     | `GET`       |
| Read One  | `/api/admins/:id` | `GET`       |
| Update    | `/api/admins/:id` | `PUT`       |
| Delete    | `/api/admins/:id` | `DELETE`    |

---

## 2. **User Routes**

| Operation | Route            | HTTP Method |
| --------- | ---------------- | ----------- |
| Create    | `/api/users`     | `POST`      |
| Read All  | `/api/users`     | `GET`       |
| Read One  | `/api/users/:id` | `GET`       |
| Update    | `/api/users/:id` | `PUT`       |
| Delete    | `/api/users/:id` | `DELETE`    |

---

## 3. **Role Routes**

| Operation | Route            | HTTP Method |
| --------- | ---------------- | ----------- |
| Create    | `/api/roles`     | `POST`      |
| Read All  | `/api/roles`     | `GET`       |
| Read One  | `/api/roles/:id` | `GET`       |
| Update    | `/api/roles/:id` | `PUT`       |
| Delete    | `/api/roles/:id` | `DELETE`    |

---

## 4. **Product Routes**

| Operation | Route               | HTTP Method |
| --------- | ------------------- | ----------- |
| Create    | `/api/products`     | `POST`      |
| Read All  | `/api/products`     | `GET`       |
| Read One  | `/api/products/:id` | `GET`       |
| Update    | `/api/products/:id` | `PUT`       |
| Delete    | `/api/products/:id` | `DELETE`    |

---

## 5. **Category Routes**

| Operation | Route                 | HTTP Method |
| --------- | --------------------- | ----------- |
| Create    | `/api/categories`     | `POST`      |
| Read All  | `/api/categories`     | `GET`       |
| Read One  | `/api/categories/:id` | `GET`       |
| Update    | `/api/categories/:id` | `PUT`       |
| Delete    | `/api/categories/:id` | `DELETE`    |

---

## 6. **Supplier Routes**

| Operation | Route                | HTTP Method |
| --------- | -------------------- | ----------- |
| Create    | `/api/suppliers`     | `POST`      |
| Read All  | `/api/suppliers`     | `GET`       |
| Read One  | `/api/suppliers/:id` | `GET`       |
| Update    | `/api/suppliers/:id` | `PUT`       |
| Delete    | `/api/suppliers/:id` | `DELETE`    |

---

## 7. **Review Routes**

| Operation | Route              | HTTP Method |
| --------- | ------------------ | ----------- |
| Create    | `/api/reviews`     | `POST`      |
| Read All  | `/api/reviews`     | `GET`       |
| Read One  | `/api/reviews/:id` | `GET`       |
| Update    | `/api/reviews/:id` | `PUT`       |
| Delete    | `/api/reviews/:id` | `DELETE`    |

---

## 8. **Barcode Routes**

| Operation | Route               | HTTP Method |
| --------- | ------------------- | ----------- |
| Create    | `/api/barcodes`     | `POST`      |
| Read All  | `/api/barcodes`     | `GET`       |
| Read One  | `/api/barcodes/:id` | `GET`       |
| Update    | `/api/barcodes/:id` | `PUT`       |
| Delete    | `/api/barcodes/:id` | `DELETE`    |

---

## 9. **Inventory Transaction Routes**

| Operation | Route                             | HTTP Method |
| --------- | --------------------------------- | ----------- |
| Create    | `/api/inventory-transactions`     | `POST`      |
| Read All  | `/api/inventory-transactions`     | `GET`       |
| Read One  | `/api/inventory-transactions/:id` | `GET`       |
| Update    | `/api/inventory-transactions/:id` | `PUT`       |
| Delete    | `/api/inventory-transactions/:id` | `DELETE`    |

---

## 10. **Order Routes**

| Operation | Route             | HTTP Method |
| --------- | ----------------- | ----------- |
| Create    | `/api/orders`     | `POST`      |
| Read All  | `/api/orders`     | `GET`       |
| Read One  | `/api/orders/:id` | `GET`       |
| Update    | `/api/orders/:id` | `PUT`       |
| Delete    | `/api/orders/:id` | `DELETE`    |

---

## 11. **Address Routes**

| Operation | Route                | HTTP Method |
| --------- | -------------------- | ----------- |
| Create    | `/api/addresses`     | `POST`      |
| Read All  | `/api/addresses`     | `GET`       |
| Read One  | `/api/addresses/:id` | `GET`       |
| Update    | `/api/addresses/:id` | `PUT`       |
| Delete    | `/api/addresses/:id` | `DELETE`    |

---

## 12. **Payment Transaction Routes**

| Operation | Route               | HTTP Method |
| --------- | ------------------- | ----------- |
| Create    | `/api/payments`     | `POST`      |
| Read All  | `/api/payments`     | `GET`       |
| Read One  | `/api/payments/:id` | `GET`       |
| Update    | `/api/payments/:id` | `PUT`       |
| Delete    | `/api/payments/:id` | `DELETE`    |

---

## 13. **Country, State, and City Routes**

### Country Routes

| Operation | Route                | HTTP Method |
| --------- | -------------------- | ----------- |
| Create    | `/api/countries`     | `POST`      |
| Read All  | `/api/countries`     | `GET`       |
| Read One  | `/api/countries/:id` | `GET`       |
| Update    | `/api/countries/:id` | `PUT`       |
| Delete    | `/api/countries/:id` | `DELETE`    |

### State Routes

| Operation | Route             | HTTP Method |
| --------- | ----------------- | ----------- |
| Create    | `/api/states`     | `POST`      |
| Read All  | `/api/states`     | `GET`       |
| Read One  | `/api/states/:id` | `GET`       |
| Update    | `/api/states/:id` | `PUT`       |
| Delete    | `/api/states/:id` | `DELETE`    |

### City Routes

| Operation | Route             | HTTP Method |
| --------- | ----------------- | ----------- |
| Create    | `/api/cities`     | `POST`      |
| Read All  | `/api/cities`     | `GET`       |
| Read One  | `/api/cities/:id` | `GET`       |
| Update    | `/api/cities/:id` | `PUT`       |
| Delete    | `/api/cities/:id` | `DELETE`    |

---

**Note**: Additional routes (e.g., for filters, sorting, and pagination) can be added as needed.

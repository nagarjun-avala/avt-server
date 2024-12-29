# Deployment Plan - Inventory Management System (IMS)

## Pre-Deployment Checklist

- Ensure database schema is up-to-date.
- Verify API endpoints are functional.
- Set up production environment (AWS EC2, MySQL database).

## Deployment Steps

1. Deploy backend to AWS EC2.
2. Deploy frontend to the web server.
3. Test APIs in the production environment.

## Rollback Procedure

1. Revert backend and frontend to the previous stable versions.
2. Restore the database from backup.

## Post-Deployment Validation

- Verify all APIs and endpoints are working.
- Check the login functionality for all user roles.

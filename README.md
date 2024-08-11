# Sport Center Management System

## Prerequisites

- Docker Desktop

## Getting Started

1. Build and start the application using Docker Compose:

   ```bash
   docker-compose up --build
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000/api
   ```

## Application Flow

### On Build

- **Database Seeding**: During build, the roles table is seeded with two roles:
  - **admin** (ID: 1)
  - **user** (ID: 2)

### Register

- **Endpoint**: `POST /auth/registration`
- **Description**: Register a new user.

### Login

- **Endpoint**: `POST /auth/login`
- **Description**: Authenticate an existing user and obtain a token. After that authorize inside a swagger with token (without Bearer prefix)

### Apply for Class

- **Endpoint**: `POST /classes/{id}/apply`
- **Description**: Only users can apply for a class.

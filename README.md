# Sport Center Management System

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) - Download and install Docker Desktop.

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

- **Role Seeding**: During build, the roles table is seeded with two roles:

  - **admin** (ID: 1)
  - **user** (ID: 2)

- **Sport Seeding**: During build, the sports table is seeded with two roles:
  - **Football** (ID: 1)
  - **Basketball** (ID: 2)
  - **Tennis** (ID: 2)

### Register

- **Endpoint**: `POST /auth/registration`
- **Description**: Register a new user.

### Login

- **Endpoint**: `POST /auth/login`
- **Description**: Authenticate an existing user and obtain a token. After that authorize in swagger with token (without Bearer prefix)

### Create sports

- **Endpoint**: `POST /sports/{id}`
- **Description**: Only admins can create sports.

### Create class

- **Endpoint**: `POST /classes/{id}`
- **Description**: Only admins can create class.

### Apply for Class

- **Endpoint**: `POST /classes/{id}/apply`
- **Description**: Only users can apply for a class.

# Open Devlo

Open Devlo is an online platform designed to help beginners learn web development and programming languages. Our goal is to provide a simple and effective way to master coding skills with a clean, modern, and user-friendly experience.

## Features

- **Beginner-Friendly**: Easy-to-follow tutorials for web development and various programming languages.
- **Modern Design**: Clean and intuitive user interface.
- **Educational Focus**: Incorporates elements of coding and learning to enhance the learning experience.

## Getting Start collaboration

### Prerequisites

- **Node.js:** Make sure you have [Node.js](https://nodejs.org/) installed on your machine. 
- **Docker (Optional):** If you prefer to run the application in a Docker container, make sure you have [Docker](https://www.docker.com/) installed.

### Installation

#### Local Setup

```bash
  # Clone the Repository
  git clone https://github.com/your-username/open-devlo.git
   
  cd open-devlo/client
  npm install # Install client dependencies
  npm start # Start the client
  
  cd open-devlo/server
  npm install # Install server dependencies
  node app.js # Start the server
```

#### Docker Setup

```bash
  # Clone the Repository
  git clone https://github.com/your-username/open-devlo.git
  cd open-devlo

  mv .env.example .env

  # Build docker images
  docker-compose build

  # Start the containers
  docker-compose up 
```

**Create users and session table in database:**

```bash
  docker ps # Copy container id of postgres.
  docker exec -it CONTAINER_ID bash # Or use sh instead of bash
  psql -U username -d testopendevlo # username and database_name in .env
```

```sql
  CREATE TABLE "session" (
      "sid" varchar NOT NULL,
      "sess" json NOT NULL,
      "expire" TIMESTAMP(3) NOT NULL,
      PRIMARY KEY ("sid")
  )

  CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR NOT NULL UNIQUE CHECK (email <> ''),
      password VARCHAR NOT NULL CHECK (password <> '')
  );
```

The client will be available at http://localhost:3000, and the server at http://localhost:5000.
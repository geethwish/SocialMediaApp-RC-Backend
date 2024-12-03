# SocialMediaApp-RC-Backend

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SocialMediaApp-RC-Backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SocialMediaApp-RC-Backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the necessary environment variables as specified in `.env.example`.

5. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

```
SocialMediaApp-RC-Backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── index.js
├── tests/
├── .env.example
├── package.json
└── README.md
```

## Folder Structure Summary

- **src/**: Contains the main source code for the application.
  - **controllers/**: Handles the request and response logic.
  - **models/**: Defines the data schemas and interacts with the database.
  - **routes/**: Manages the application routes.
  - **services/**: Contains business logic and service functions.
  - **utils/**: Utility functions and helpers.
  - **index.js**: Entry point of the application.
- **tests/**: Contains test cases for the application.
- **.env.example**: Example environment variables file.
- **package.json**: Lists dependencies and scripts for the project.
- **README.md**: Project documentation file.

## Libraries Used

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **lokijs**: Use as the database.
- **uuid**: For create uniue id's.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **cors**: For enabling Cross-Origin Resource Sharing.

## Version Guide

- **Node.js**: v18.x or higher
- **NPM**: v6.x or higher
- **MongoDB**: v4.x or higher

## API Documentation

You can access the API documentation at [http://localhost:3001/api-docs/](http://localhost:3001/api-docs/)

##<Advanced AuthRoutes>

## Description

This project is a Node.js backend application built on the principles of Full Authorization and MVC Clean Architecture. It uses Node.js and Express for server-side development, bcrypt for password encryption, dotenv for environment variable management, CORS for cross-origin resource sharing, jsonwebtoken for authorization, cookie-parser for handling cookies, and follows a clean MVC architecture for better code organization.

## Features

- **User Authentication:** Secure user registration, login, and logout functionalities.
- Authorization:Token-based authentication and authorization using jsonwebtoken.
- CRUD Operations:Perform CRUD operations on both users and tasks.
- **Clean MVC Architecture:** Well-structured project organization following the Model-View-Controller (MVC) architecture.
- **Middleware:** Utilizes middleware for cookie parsing, error handling, and authorization checks.
- **Database Integration:** Connects to a database to store and retrieve user and task information.
- **Cross-Origin Resource Sharing (CORS):** Allows frontend applications to access the backend API securely.
- **Database Integration:** Connect seamlessly to a MongoDB database using Mongoose for reliable data storage and retrieval.

-**Advanced Error Handling:** Enhance the error-handling mechanism to provide informative responses.

## Technologies Used

- Node.js
- Express.js
- Bcrypt
- Dotenv
- CORS
- JSON Web Token (jsonwebtoken)
- Cookie Parser

## Project Structure

The project follows a clean MVC architecture with the following directory structure:

- **controllers:** Contains the logic for handling requests and responses.
- **routes:** Defines the application routes and links them to corresponding controllers.
- **middlewares:** Houses middleware functions for authentication, error handling, etc.
- **models:** Defines the data structures for users and tasks.
- **utils:** Utility functions, such as sending cookies.
- **database:** Manages database connections and schema models.

## Installation

1. Clone the repository: `git clone https://github.com/Abhisekh8421/AdvancedAuthRoutes.git`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file and configure necessary variables.
4. Start the server: `npm run dev`

## Usage

- Access the API at `http://localhost:3000`.
- Explore the defined routes for user and task CRUD operations.
- Test API functionality using Postman or other API testing tools.

## Testing

- Use Postman or similar tools to test each API endpoint.
- Ensure proper authentication and authorization for protected routes.
- Verify CRUD operations for both users and tasks.

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Mention any libraries or tools that inspired or helped in your project.

## Contact Information

For any inquiries or feedback, please contact:

- Developer Name: [Suru Abhisekh]
- Email: [abhisekhsuru@gmail.com]
- GitHub: [https://github.com/Abhisekh8421]

Feel free to fork, contribute, or provide feedback! Happy coding!
-SURU ABHISEKH [FULLSTACKWEBDEVELOPER-MERN]

# iNotebook - A Full Stack MERN Web Application

![iNotebook Logo](https://yourwebsite.com/path-to-your-logo.png)

Welcome to iNotebook, a powerful and user-friendly web application built using the MERN stack (MongoDB, Express, React, and Node.js). iNotebook allows you to create an account, securely log in, and manage your notes effortlessly. With a sleek and responsive UI powered by Material-UI (MUI), iNotebook offers a seamless experience for note-taking and organization.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

iNotebook boasts a range of features designed to enhance your note-taking experience:

- **User Authentication**: Secure registration and login functionality to protect your notes.
- **Note Management**: Create, update, and delete notes effortlessly.
- **MongoDB Database**: Utilizes MongoDB to store and manage your notes securely.
- **Responsive UI**: Material-UI ensures an intuitive and responsive user interface.
- **Full Stack MERN**: Leveraging the power of MongoDB, Express, React, and Node.js for a robust web app.
- **User-Friendly**: A clean and intuitive design makes note-taking a breeze.
- **Password Hashing**: Utilizes bcrypt to securely hash passwords for enhanced security.
- **JWT Authentication**: Implements JWT (JSON Web Tokens) authentication for secure user access.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. If not, you can download it from [nodejs.org](https://nodejs.org/).

## Getting Started

Follow these steps to get iNotebook up and running on your local machine:

```bash
# Clone the Repository
git clone https://github.com/nchhillar2004/iNotebook.git

# Navigate to the Server Folder
cd iNotebook/server

# Install Server Dependencies
npm install

# Navigate to the Client Folder
cd ../client

# Install Client Dependencies
npm install
```

# Set Up Environment Variables
# In the server folder, create a .env file to store your environment variables.
# You will need to define the following variable:
# - JWT_SECRET: A secret key for JWT token generation.
# In the server folder in "server.config.js" file, you will need to define the following variables:
# - database.port : your mongoDB port.
# - database.name : your mongoDB name.


## Usage

Once you have iNotebook up and running, you can:

- **Register**: Create an account using a unique email address and a strong password.
- **Login**: Sign in with your registered email and password.
- **Add Notes**: Create, update, and delete notes with ease.
- **Secure Authentication**: Enjoy the peace of mind knowing that your passwords are securely hashed using bcrypt.
- **JWT Authentication**: JWT (JSON Web Tokens) authentication ensures secure and efficient user authentication.

## Contributing

Contributions to iNotebook are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push your changes to your fork: `git push origin feature-name`.
5. Create a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

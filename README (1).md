
# Front-End Application

This project is a React-based front-end application designed to manage employee data, including login functionality and salary details.

## Project Structure

The application is organized as follows:

```
public/
│── favicon.ico         # Application favicon
│── index.html          # Main HTML file for React
│── logo192.png         # Default React logo
│── logo512.png         # Default React logo
│── manifest.json       # PWA manifest
│── robots.txt          # Robots.txt for search engines
src/
├── components/         # Reusable React components
│   ├── EmployeeSalaryPage.jsx  # Component to display employee salary details
│   ├── History.jsx             # Component for displaying history records
│   ├── LoginForm.jsx           # Login form UI
│   ├── LoginForm.test.js       # Unit tests for the login form
│   ├── NavBar.jsx              # Navigation bar component
├── services/           # Service files for handling API calls
│   ├── login.js               # API calls for login functionality
│   ├── login.test.js          # Unit tests for login service
├── styles/             # CSS styles for the app
├── App.js              # Main React application component
├── Home.js             # Home page component
├── index.css           # Global CSS styles
├── index.js            # Main entry point for the React app
.gitignore              # Git ignore file
package.json            # Project dependencies and scripts
package-lock.json       # Locked versions of dependencies
README.md               # Project documentation
requests.rest           # REST client for testing API requests
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Running Tests

To run the unit tests:
```bash
npm test
```

### API Testing

Use the `requests.rest` file to test the API endpoints. You can open the file in your code editor and execute requests directly.

## Key Features

- **Employee Management**: View and manage employee salary data.
- **Login System**: Secure login and authentication functionality.
- **Responsive Design**: Optimized for desktop and mobile devices.

## Scripts

Here are the main scripts available:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

## Folder Explanation

- **components/**: Contains reusable React components such as forms, navigation bars, and pages.
- **services/**: Includes API handling logic for interacting with the backend.
- **styles/**: Contains all global and component-specific styles.

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS for styling
- Jest (for testing)
- REST Client (for API testing)

## Contributing

Feel free to fork the project and submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


---


# Backend Application

This is a Spring Boot-based backend service for managing employee data and handling authentication, salary records, and other operations.

## Project Structure

```
src/
├── main/
    ├── java/com/sampath/assignment/
        ├── Configuration/
        │   └── CustomConfiguration.java      # Custom configurations for the application
        ├── Controller/
        │   └── UserController.java          # REST API endpoints
        ├── dto/
        │   ├── EmployeeRequest.java         # DTO for employee data requests
        │   ├── EmployeeLogin.java           # DTO for login data
        │   ├── History.java                 # DTO for history-related data
        │   └── SalaryRequest.java           # DTO for salary-related requests
        ├── entity/
        │   ├── Department.java              # Entity for department data
        │   ├── Employee.java                # Entity for employee data
        │   └── EmployeeSalary.java          # Entity for salary records
        ├── helper/
        │   ├── EncryptPassword.java         # Utility for password encryption
        │   ├── JWTHelper.java               # Utility for JWT token handling
        │   └── RequestInterceptor.java      # Interceptor for API requests
        ├── mapper/
        │   ├── EmployeeMapper.java          # Mapper for employee data
        │   └── EmployeeSalaryMapper.java    # Mapper for employee salary data
        ├── repo/
        │   └── EmployeeRepo.java            # Repository for employee-related queries
        ├── Services/
        │   ├── CustomerService.java         # Business logic for customer operations
        │   └── AssignmentApplication.java   # Main application entry point
    ├── resources/
        ├── static/                          # Static resources
        ├── templates/                       # Templates for the application (if any)
        └── application.properties           # Application configuration
```

## Features

- **Employee Management**: Handles CRUD operations for employee data.
- **Authentication**: Includes JWT-based login functionality.
- **Salary Management**: Manages employee salary details.
- **Department Management**: Handles department information.
- **Interceptors**: Request validation and preprocessing.

## Technologies Used

- **Spring Boot**: Main framework for the backend.
- **Hibernate**: ORM for database interaction.
- **JWT**: Authentication mechanism.
- **Maven**: Dependency management.
- **MySQL**: Database for data storage.

## Getting Started

### Prerequisites

Ensure the following are installed:

- Java 11 or higher
- Maven
- MySQL

### Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd Backend
   ```

2. Configure the `application.properties` file in the `src/main/resources` directory with your database details:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/<database_name>
   spring.datasource.username=<your_username>
   spring.datasource.password=<your_password>
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Build the project using Maven:
   ```bash
   mvn clean install
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The application will run on [http://localhost:8080](http://localhost:8080) by default.

### Database Schema

Ensure your database is set up with the necessary schema. The application uses JPA to manage entities, so the schema will be auto-generated (if configured).

### Endpoints

The backend provides the following REST API endpoints:

| Endpoint             | Method | Description                    |
|----------------------|--------|--------------------------------|
| `/api/employees`     | GET    | Fetch all employees           |
| `/api/employees/{id}`| GET    | Fetch a single employee by ID |
| `/api/login`         | POST   | Authenticate user             |
| `/api/salary`        | POST   | Add/Update salary details     |

### Testing

Run the following command to execute unit tests:
```bash
mvn test
```

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

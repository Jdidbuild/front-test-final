# Test En voiture Simone

This project is a web application built using **Angular** and **NgRx** for state management. It is structured to handle different features and uses **Lazy Loading** for efficient module loading.

## Project Structure

The project is divided into several main modules and follows a modular architecture. Here's a high-level overview of the directory structure:


## Key Features

### 1. **Lazy Loading**

- The project uses **Lazy Loading** for modules to optimize initial loading time. This means that each feature module is loaded only when required, improving performance.

### 2. **NgRx for State Management**

- **NgRx** is used for managing the application state in a reactive way. It follows the **Redux** pattern with actions, reducers, and effects.
  - **Actions**: Used to represent user actions or events that trigger changes in the state.
  - **Reducers**: Handle state transitions based on dispatched actions.
  - **Effects**: Handle side effects like HTTP requests or interactions with external APIs.

### 3. **Feature Modules**

Each feature of the application is organized into its own **Angular module**, typically with its own:
- **Components** Child Components on the featur.
- **Main** Main component for the fearture.
- **Services** Facades pattern.
- **Store** (actions, reducers, selectors) for managing state related to that feature.

For example:
- The **Examin** feature contains everything related to exams, including Maincomponents like `MainExamComponent`, services for handling exam data, NgRx store files, and routing configurations.

### 4. **Routing**

- The routing is handled using **Angular Router** with **Lazy Loading** for feature modules. The main routing module (`app-routing.module.ts`) configures the routes, and each feature module has its own routing configuration.
  
  Example:
  - **ExamModule**: Lazy-loaded when navigating to `/exam`.

### 5. **Services and API Calls**

5. Services and API Calls
Api-client are used to handle communication with APIs and to manage business logic. For example, the DefaultService is responsible for fetching data related to exams.

In this project, we use a Swagger OpenAPI Client that is automatically generated to facilitate communication with the API. This client is based on the OpenAPI specification and allows for structured, typed API calls. Instead of manually creating HTTP requests, the Swagger client generates the necessary methods for each API endpoint based on the provided Swagger documentation.

## Additionnal

## Note

- Please note that the CSS in this project has not yet been optimized. 
- Please note that the add functionality `POST /api/exams` is not yet implemented in this project.
- Comments are missing throughout the project. It is recommended to add comments to improve code readability and understanding.
- Only one unit test has been written for the `examEffect*` function. It is advised to add more tests to ensure adequate coverage.


## How to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jdidbuild/front-test-final.git

 ```bash
   docker-compose --build
   docker-compose up
   



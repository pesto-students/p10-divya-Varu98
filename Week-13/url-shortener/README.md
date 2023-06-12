# Little Link

Little Link is a URL shortening application built with React and React Router. It allows users to input a URL and get a shortened version of that URL. The application utilizes the "https://api.shrtco.de/v2" API to generate the shortened URLs.

![Little Link Demo](https://github.com/pesto-students/p10-divya-Varu98/blob/week-13/Week-13/url-shortener/public/littleLink.gif)


## Technologies Used

- React
- React Router
- Context API

## Getting Started

To get started with the Little Link project, follow the instructions below:

1. Clone the repository:

```shell
git clone <repository-url>
```

2. Navigate to the project directory:

```shell
cd little-link
```

3. Install the dependencies:

```shell
npm install
```

4. Run the development server:

```shell
npm start
```

5. Open your web browser and visit http://localhost:3000 to see the application.

## Project Structure

The project follows a typical React project structure. The main files and directories are as follows:

- **src/components**: Contains reusable components used throughout the application.
- **src/contexts**: Contains the context providers for managing state and data.
- **src/pages**: Contains the individual pages/routes of the application.
- **src/utils**: Contains utility functions and constants used in the application.

## API Integration

The application integrates with the "https://api.shrtco.de/v2" API to generate shortened URLs. The API endpoint is defined as follows:

```javascript
export const SHORT_API_URL = "https://api.shrtco.de/v2";
```

The `src/utils/api.js` file contains the necessary functions to interact with the API, including sending requests and handling responses.

## Routing

Little Link uses React Router for handling routing within the application. The routes are defined in the `src/App.js` file using the `<Switch>` and `<Route>` components from React Router.

## Context

The application utilizes the Context API for managing state and data. The main context provider is defined in `src/contexts/LinkContext.js`, which provides access to the link-related data and functionality throughout the application.

## Conclusion

Little Link is a simple URL shortening application built with React and React Router. It demonstrates the usage of React Router for routing and the Context API for state management. By integrating with the "https://api.shrtco.de/v2" API, the application generates shortened URLs based on user input. Feel free to explore the codebase and make any modifications as needed. Happy coding!

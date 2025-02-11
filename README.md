# Quiz Grad

This is a quiz app that allows users to participate in interactive quizzes. The app fetches questions and answers from an external API, displays them to users, stores their results, and is designed as a Progressive Web App (PWA). We aim to provide a seamless user experience while ensuring robust security features, such as Google reCAPTCHA, to prevent bot submissions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React component library for building modern and responsive web applications.
- **Axios**: A promise-based HTTP client for making requests to the backend.
- **i18next**: A library for internationalization, enabling multi-language support.
- **React Router**: A library for routing and navigation within the app.
- **react-hook-form**: A library for handling form validation and submission.
- **react-toastify**: A library for displaying toast notifications.
- **recharts**: A charting library for rendering data visualizations.
- **gsap**: A JavaScript library for creating high-performance animations.
- **zustand**: A small, fast, and scalable state management library for React.
- **swiper**: A modern touch slider for creating interactive carousels and galleries.
- **react-google-recaptcha**: Integrated to provide security and prevent bot submissions.

## Features

- Multi-language support
- Responsive design
- User authentication with Google reCAPTCHA
- Data visualizations using charts
- Animated transitions and effects
- PWA support

## API Used

[Quiz Api](https://quizapi.io/)

https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/amir4774/Quiz-App.git
    ```
2. Navigate into the project directory:
    ```bash
    cd quiz-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

The app will be available at `http://localhost:3000`.

## Usage

1. Open the app in your browser.
2. Select a quiz category, limit, and difficulty then start answering questions.
3. At the end of the quiz, your score will be displayed.
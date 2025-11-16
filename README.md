# YouTube Clone Client

This project is a YouTube clone web application built using JavaScript, Firebase for storage, and JWT for authentication. The application allows users to upload, watch, and comment on videos, providing a platform similar to YouTube.

## Features

- User authentication using JWT
- Video upload and storage with Firebase
- Video streaming and playback
- Commenting system for videos
- Responsive design with a user-friendly interface

## Project Structure

```
youtube-clone-client
├── public
│   └── index.html          # Main HTML entry point
├── src
│   ├── main.js            # Application initialization and routing
│   ├── App.js             # Root component managing layout and routing
│   ├── routes.js          # Application routes
│   ├── components          # Reusable components
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   ├── VideoCard.js
│   │   ├── VideoPlayer.js
│   │   └── CommentList.js
│   ├── pages               # Page components
│   │   ├── Home.js
│   │   ├── Watch.js
│   │   ├── Upload.js
│   │   ├── Profile.js
│   │   └── Login.js
│   ├── services            # Service functions for Firebase and API
│   │   ├── firebase.js
│   │   ├── auth.js
│   │   ├── api.js
│   │   └── storage.js
│   ├── hooks               # Custom hooks
│   │   └── useAuth.js
│   ├── store               # State management
│   │   └── index.js
│   ├── utils               # Utility functions
│   │   └── jwt.js
│   └── styles              # CSS styles
│       └── main.css
├── firebase.json           # Firebase configuration
├── .firebaserc             # Firebase project configuration
├── .env.example             # Example environment variables
├── package.json             # npm configuration
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd youtube-clone-client
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project and configure authentication and storage.
   - Update the `src/services/firebase.js` file with your Firebase configuration.

4. **Run the application:**
   ```
   npm start
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.
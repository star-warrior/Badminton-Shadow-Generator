# ShadowMate - Badminton Shadow Practice Generator

ShadowMate is a web application designed to help badminton players practice their footwork and court movement through shadow practice. The application generates random movement patterns on a badminton court, helping players improve their agility, reaction time, and court coverage.

## Features

- **Customizable Practice Sessions**

  - Set number of shots (0-50)
  - Configure number of sets (0-10)
  - Adjust difficulty levels (0-5)
  - Set cooldown periods (0-100)

- **Court Position Selection**

  - Choose specific court areas to focus on:
    - Front Left
    - Front Right
    - Mid Left
    - Mid Right
    - Back Left
    - Back Right

- **Dynamic Movement Indicators**

  - Real-time arrow indicators showing movement direction
  - Automatic progression based on difficulty level
  - Visual representation on a badminton court layout

- **User Authentication**
  - Google OAuth integration for user accounts
  - Secure login system

## Technical Stack

- React.js
- React Router for navigation
- CSS for styling
- Google OAuth for authentication

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/badminton-shadow-generator.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Usage

1. Click on "Let's Practice" or "Start Practice" to begin
2. Configure your practice session parameters:
   - Set the number of shots
   - Choose the number of sets
   - Select difficulty level
   - Set cooldown period
3. Select the court positions you want to practice
4. Follow the arrow indicators for movement patterns
5. Complete your shadow practice session

## Difficulty Levels

The application provides different timing intervals based on difficulty:

- Level 1: 3.5 seconds between movements
- Level 2: 3.0 seconds between movements
- Level 3: 2.5 seconds between movements
- Level 4: 2.0 seconds between movements
- Level 5: 1.5 seconds between movements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any queries or suggestions, please open an issue in the GitHub repository.

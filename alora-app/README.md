# Alora Application

## Overview
Alora is a web application designed to assist users in planning their daily activities based on their cycle phases. It leverages AI to personalize recommendations and provides a simple, fast interface for user interaction.

## Features
1. **Phase-Specific Daily Planning**: 
   - Generates daily plans tailored to the user's current cycle phase.
   - Provides recommendations based on the user's phase.

2. **AI-Powered Personalization**: 
   - Learns from user inputs to adjust plans according to mood, energy levels, and symptoms.
   - Integrates data from wearable devices for enhanced personalization.

3. **Simple, Fast Interface**: 
   - User-friendly interface for selecting cycle phases and moods.
   - Quick rendering of the dashboard with personalized recommendations.

## Project Structure
```
alora-app
├── src
│   ├── app.ts
│   ├── features
│   │   ├── dailyPlanning.ts
│   │   ├── aiPersonalization.ts
│   │   └── fastInterface.ts
│   ├── routes
│   │   └── index.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd alora-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage
- Upon starting the application, users can select their cycle phase and mood.
- The application will generate a daily plan and provide personalized recommendations based on the inputs.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
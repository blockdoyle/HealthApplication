# Life-thrive

## Overview

This web application is designed to help users manage their fitness and health journey, offering tools for account management, nutrition tracking, and workout planning.

## Link to project proposal

https://1drv.ms/w/s!AlCA7mtJhF6qgQJE-Dzi6PUkfmW6?e=vOM8hq

## Screenshot

## Features

### Account Management
- Secure user registration and login using JWT for data security.

### Calorie Tracker
- Tracks calorie intake and offers daily goals, integrated with the CalorieNinjas API for accurate data.
- Provides recipe suggestions based on remaining daily calories.

### Weight Tracker
- Allows setting of start and target weights, and tracks progress through interactive graphs.
- Supports both metric and imperial units.

### Workout Planner
- Offers a customizable database of exercises, categorized by body part.
- Allows customization of routines with adjustable sets, reps, and rest times.
- Estimates calories burned per exercise.

## Technologies Used

### Client-Side Technologies
- **React**: Manages the view layer for web and mobile apps.
- **React-DOM**, **React Router DOM**, **Vite**: Enhance and support SPA functionalities.
- **Ant Design (antd)**, **Chart.js and React-Chartjs-2**, **Bootstrap and React-Bootstrap**: Provide UI components and responsive design.
- **Apollo Client**: Manages data with GraphQL.

### Server-Side Technologies
- **Node.js**, **Express**: Foundation for the web application.
- **Apollo Server Express**, **GraphQL**: Handle API queries.
- **Mongoose**, **Bcryptjs**, **Dotenv**, **Jsonwebtoken**, **Cors**: Support database interactions, security, and configuration.

## Setup and Installation

0. **Before setup**: Make sure npm is installed and MongoDB is up and running
1. **Clone the repository**:
```bash
git clone [repository-url]
```
2. **Install dependencies**:
```
cd [project-directory]
npm install
```
3. **Set up environment variables:**
If using custom DB URL, create a .env file in the root directory with necessary API keys and database URIs.
4. **Start the server:**
```npm run dev```
6. **Access the application:** Open http://localhost:3000 in your browser.

## Deployed location

This app can be found here:
https://life-thrive.onrender.com/

## Authors
Brock Lockhart-Doyle
Jianing Zhou
Muniba Pervez
Mohnish Bhujun


   

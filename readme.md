## React Native Expo Book APP Development

### Prerequisite

- Node.Js 20+
- Npm or Yarn
- Expo GO (For testing in Android or IOS)
- XCode (For MacOS Simulator)
- Android Studio or SDK (For Windows Simulator)

### Folder Structure

```bash
├── API Express   <-- BackEnd API to CRUD MySQL
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── Book APP      <-- React Native Project
│   ├── App.js
│   ├── app.json
│   ├── assets
│   ├── babel.config.js
│   ├── components
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── yarn.lock
├── Book Dummy    <-- Initial Project Model
│   ├── App.js
│   ├── app.json
│   ├── assets
│   ├── components
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── express_bookdb.sql  <-- Database file init
└── readme.md           <-- Project Guide
```

### Install

1. Install Depedency ExpressJS Book API
   ```bash
   cd API\ Express/ && yarn install
   ```
2. Install Dependency Expo React Native
   ```bash
   cd Book\ APP/ && yarn install
   ```

### Import Data Example To MySql

1. Create New Database

   ```sql
   CREATE DATABASE express_bookdb;
   ```

2. Import Sample Data
   ```sql
   mysql -u root -p express_bookdb < express_bookdb.sql
   ```

### Run

1. Configure .env in Express API

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=express_bookdb
   ```

2. Start ExpressJS Book API

   ```bash
   cd API\ Express/ && yarn start
   ```

3. Configure .env in React Native APP
   ```env
   API_URL=http://192.168.1.7:3000/books <-- Your ExpressJS IP Address
   ```
4. Start Expo React Native

   ```bash
   cd Book\ APP/ && yarn start
   ```

### How to Open

Make sure you are on the same network if you are using android and ios devices for development

#### For Android or IOS

1. Download Expo Go in App Store or Play Store
2. Scan the QR code that appears on the terminal

#### For MacOS or Windows

1. Use web browser for easy development
2. Use simulator SDK or Android Studio for Windows
3. Use native simulator on MacOS with Xcode

### If You Want to Init Expo React Native Project

1. Install Expo CLI

   ```bash
   npm install --global expo

   ```

2. Create Expo Project

   - Template Default

     ```bash
     npx create-expo-app MyApp

     ```

   - Template Blank

     ```bash
     npx create-expo-app MyApp --template blank
     ```

## React Native Expo Book APP Build to APP

1. Register to EAS in https://expo.dev/signup
2. Open Book APP Project then login
   ```bash
   npx eas login
   ```
3. Init EAS Project

   ```bash
   npx eas init

   ```

4. Build Project

   ```bash
   npx eas build -p android --profile preview

   ```

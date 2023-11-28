# Mario Blackjack

A Blackjack card game, made using React.js and Firebase for storing data.

<br/>
<img src="../main/docs/demo1.png?raw=true" width="700" height="400" />
<img src="../main/docs/demo2.png?raw=true" width="700" height="400" />
<br/>

## Table of Contents 📋
- [Getting Started](#getting-started-)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
- [Running the Project](#running-the-project-%EF%B8%8F)
  - [Installation](#installation)
  - [Testing](#testing)
- [Project Structure](#project-structure-)
- [Demo](#demo-)
- [References](#references-)

## Getting Started 🚀

### Introduction
- You need to login the app, using the Google Provider <i>(Don't worry, the app does not store your credentials at all. It's all served by the official Google provider and your account is not exposed);</i>
- The app has its game logic under the utils folder;
- The app saves the game result into the Firebase, linking with your Google account;

### Prerequisites

Before you get started, ensure you have the following installed:

- [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);

## Running the Project 🏃‍♂️

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/joaolessab/mario-blackjack--react.js-firebase.git
cd app
yarn
```

### Local execution

1. You will need to set credentials for you Firebase database (check References section - for more details);
- 1.1. To create your own `.env` file, run: `cp .env.example .env`;
- 1.2. Change the variable values of the `.env` file generated, using now your own Firebase credentials;
2. Run `yarn start`;
3. Open you browser at `https://localhost:3000/` (usually it's the 3000 port, but it can change. Check your terminal);

### Testing

1. Run `yarn test`;
2. Press `a` to run all the tests;

## Project Structure 📁

    .
    ├── ...
    ├── docs                                # Documentation files
    ├── app                                 # App main folder
    │   |── components/                     # Components broken into small pieces
    │   |── pages/                          # Main components views that consumes the components
    │   |── assets/                         # Images, fonts and icons for the app
    │   |── utils/                          # Utils that concentrates the game logic and some string manipulations
    │   |── context                         # Context to store and control app data
    │   │      ├── AuthProvider.tsx         # Main responsible file for controlling the app login and credentials
    │   |── firebase                        # Folder that has all the files related to the Firebase connection
    │   │      ├── firebaseConfig.ts        # Firebase default file reading credentials and setting up the library
    │   ├── App.js                          # Main file of the project
    │   ├── package.json                    # Libraries and dependencies of the project
    │   └── ...                             # etc.
    └── ...

## Demo 🎥

### >> [Live App here!](https://mario-blackjack-react-js-firebase.vercel.app/)

### >> Screencast
https://github.com/joaolessab/mario-blackjack--react.js-firebase/assets/21973502/1aac6231-e261-49e1-afbb-78e0d0c8175c


## References 📚

- [Firebase: Setting up a project](https://reactnative.dev/](https://firebase.google.com/docs/web/setup)https://firebase.google.com/docs/web/setup);

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This is a cart cost calculator, based on React and Redux. The user is able to add or remove items and the total in the bottom will be updated automatically. There is only one reducer that contains the cart state and this state is passed to the CartContainer which propagates it to its children.

Here is a brief description of the folder structure :

- actions : contains the redux actions to add or remove an item
- assets : contains all the images
- components: contains all the components and the tests associated
- constants: contains the constants
- reducers: contains the redux reducer that updates the state
- services: contains a pure Javascript class, agnostic to UI framework to calculate the cart price and the test associated

I didn't really focused on design so I know that the style of my webapp is quite poor. Sorry for your eyes :'-(

NB : It took me around 5 hours to develop this webapp

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

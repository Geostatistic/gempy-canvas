This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Sources

https://bit.dev/components

Typescript
https://github.com/Microsoft/TypeScript-React-Starter
https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#basic-cheatsheet-table-of-contents

Hooks
https://reactjs.org/docs/hooks-reference.html#usestate

Redux + Hooks
https://react-redux.js.org/next/api/hooks#useselector

## Project structure patterns

/src
&nbsp; &nbsp; index.tsx
&nbsp; &nbsp; index.css
&nbsp; &nbsp; /components
&nbsp; &nbsp; &nbsp; &nbsp; /ComponentX
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ComponentX.tsx
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ComponentX.css
&nbsp; &nbsp; /containers
&nbsp; &nbsp; &nbsp; &nbsp; ComponentX
&nbsp; &nbsp; /types
&nbsp; &nbsp; &nbsp; &nbsp; index.tsx
&nbsp; &nbsp; /constants
&nbsp; &nbsp; &nbsp; &nbsp; index.tsx
&nbsp; &nbsp; /store
&nbsp; &nbsp; &nbsp; &nbsp; index.tsx
&nbsp; &nbsp; /actions
&nbsp; &nbsp; &nbsp; &nbsp; index.tsx
&nbsp; &nbsp; /reducers
&nbsp; &nbsp; &nbsp; &nbsp; index.tsx

## Notes on practice

Strongly inspired by "React+TypeScript Cheatsheets"
Function Components are written as normal functions;
Hooks: useState: Types via Type inference;

## Todo next

1. Counter
2. Redux-Saga
3. Konva
4. Konva to store
5. Connect to Backend

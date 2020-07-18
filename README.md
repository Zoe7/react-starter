# react-starter

This project was created to serve as a starter repository, including all the libraries and tools that like to use.

It includes:

- [x] [Create React App typescript template.](https://create-react-app.dev/docs/adding-typescript).
- [x] [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/)
- [ ] [React Router](https://reactrouter.com/)
- [x] [Storybook](https://storybook.js.org/)
- [x] [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [jest-dom](https://github.com/testing-library/jest-dom)
- [x] [Charka-ui](https://chakra-ui.com/)
- [x] Pre-commit hook checking for prettier formatting, eslint, and tests

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

### `yarn lint`

Checks whether the code complies with linting rules.
Pass the `--fix` flag to this script to automatically fix issues.

### `yarn prettier`

Run the prettier command on `.ts`, `.tsx` and `.json` which are not listed in `gitignore`.

### `yarn check-format`

Checks if any file targeted by the `prettier` script doesn't pass prettier formatting

### `yarn format`

Automatically format all files targeted by the `prettier` script.
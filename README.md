# Pipes Puzzle

[Evolution Gaming](https://www.evolution.com/) Front End Developer Assignment

## WARNING!!!

You MUST pass your own `base url` and your own `api_token` to the `.env.local` file.

Example of &nbsp; `.env.local` file.
```
REACT_APP_BASE_URL="wss://example.com/pipes"
```

## Live Demo

If you want to see a live version, visit here: [demo](https://pipes-puzzle-eta.vercel.app/).

## Setup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Whats inside?
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Use Websocket](https://www.npmjs.com/package/react-use-websocket)
- [Jest](https://jestjs.io/pt-BR/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Styled Components](https://styled-components.com/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Notes

### Passwords obtained:

- JustWarmingUp
- DefinitelyWarm

Note: From level 3+ is really huge! I didn't had time to pass it.

### Key decisions

- I've never created anything with Websocket before, so I searched for a good lib and I found the react-use-websocket;
- I'm not so good at creating a layout from scratch (I have an engineer mind, not a creative one), so I've copied the [Dracula Theme Palette](https://draculatheme.com/contribute);
- The pipes I copied from [Car1ot Solution](https://github.com/car1ot/evolution-pipes). I thought that only the symbols on the screen were weird, so I've searched for something prettier and something that fits my color scheme.
- Typescript has the "Duck Typing" so it's not necessary to type everything.
- This is a really small project, so a state management like Redux is not needed. LocalStorage handles it really well.

### Limitations

- The UX is not so good from level 3 or higher. So I made a scrollable wrapper.
- From level 3+ the websocket starts to get heavy. So it can be a little slow (depending on your connection).

## Available Scripts

In the project directory, you can run:

### `npm run dev or yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test or yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build or yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject or yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

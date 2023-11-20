# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## IMPORTANT
Add a .settings.json file into a .vscode folder. Should be like :
```
/.vscode
    |.settings.json
/app-name
    |/...rest-of-this-app
```

and paste this rules into the .settings.json just created :
```json
{
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "eslint.format.enable": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.requireConfig": true,
    "workbench.editor.tabSizingFixedMaxWidth": 120,
    "editor.tabSize": 2,
    "editor.indentSize": "tabSize",
    "prettier.semi": false,
    "javascript.format.semicolons": "remove",
    "typescript.format.semicolons": "remove",
    "prettier.endOfLine": "auto",
    "prettier.jsxSingleQuote": true,
    "prettier.singleQuote": true,
    "prettier.tabWidth": 2,
    "css.lint.unknownAtRules": "ignore",
    "less.lint.unknownAtRules": "ignore",
    "scss.lint.unknownAtRules": "ignore"
}
```

## 🛠️ Needed for local dev :
Please replace <b>*basename*</b> prop of <b>*<Router .../>*</b> into <b>src/index.tsx</b> by : <b>`'/'`</b>.\
Also replace <b>*homepage*</b> by: `http://localhost:3000` into <b>*package.json*</b> file.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

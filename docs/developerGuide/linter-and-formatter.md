# Linter & Formatter

## [`ESLint`](https://eslint.org/docs/latest/use/getting-started)

We use **ESLint** as a javascript code analyzer to find possible problems and standardize the style of the code.

```bash
npm install eslint -D
npx eslint --init
npm install --save-dev eslint-config-prettier
```

  <details>
  <br />
  <summary>You can also run this command directly.</summary>

```bash
  npm init @eslint/config

√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard
√ What format do you want your config file to be in? · JSON

- eslint@8.39.0
- eslint-plugin-import@2.27.5
- eslint-config-standard@17.0.0
- eslint-plugin-n@15.7.0
- eslint-plugin-promise@6.1.1
```

  </details>

## [`Prettier`](https://prettier.io/docs/en/install.html)

We use **prettier** as code formatter.

```bash
npm install prettier -D --save-exact
echo {}> .prettierrc.json
echo > .prettierignore
```

## [`lint-staged`](https://github.com/okonet/lint-staged)

Run prettier and eslint on staged files.

```bash
npm install lint-staged -D
echo {}> .lintstagedrc
```

Add to .lintstagedrc:

> ```json
> {
>   "**/*.(js|ts)": ["prettier --write", "eslint --fix"],
>   "**/*.{html,css,json,md}": "prettier --write"
> }
> ```

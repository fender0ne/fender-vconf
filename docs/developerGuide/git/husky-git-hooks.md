# [`Husky`](https://typicode.github.io/husky/#usage) - Git hooks made easy

We want to run prettier and eslint before each commit, and run tests before a git push. For that, we will use git hook through **husky**.

> :spiral_notepad: We could also use [`git-hooks`](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) instead of husky, but we prefer husky because it is easier to use.

```bash
# installing husky
npx husky-init && npm install
# and for each hook you want to add:
npx husky add .husky/pre-commit "npx lint-staged"
# see the new folder created: /.husky
```

> :warning: **For windows users**:
> if you see the help message when running **npx husky add** ..., try:
>
> ```bash
> node node_modules/husky/lib/bin add .husky/pre-commit "npx lint-staged"
> node node_modules/husky/lib/bin add .husky/pre-push "npm run test"
> ```
>
> instead. This isn't an issue with husky code.

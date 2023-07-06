# commitlint

# Lint commit messages with commitlint

[`commitlint`](https://commitlint.js.org/#/) helps your team adhere to a commit convention, the default used by commitlint is [`Conventional Commits`](https://www.conventionalcommits.org)

The most common commit conventions follow this pattern:

```
type(scope?): subject
body?
footer?
```

## Local Setup

```bash
# For Windows:
npm install --save-dev @commitlint/cli @commitlint/config-conventional
# Configure commitlint to use conventional config
echo "{ \"extends\": [\"@commitlint/config-conventional\"] }" > .commitlintrc.json
```

### Check commitlint version on windows

```bash
# run from local installations
"node_modules\.bin\commitlint" --version
# run using npx
npx --no -- commitlint --version
```

### Testing the Setup

```bash
# Lint from stdin
echo 'foo: bar' | node_modules/.bin/commitlint --verbose
# Lint last commit from history
node_modules/.bin/commitlint --verbose --from=HEAD~1
# Lint all commit from history
node_modules/.bin/commitlint --verbose --from
```

Example:

```bash
git reflog
79d5b94 (HEAD -> main) HEAD@{0}: commit: chore: tres
2176855 HEAD@{1}: commit: chore: dos
59d5a69 HEAD@{2}: commit: chore: uno
edbe515 (origin/main) HEAD@{3}: commit: chore: commit-msg 2
6c7d082 HEAD@{4}: commit: chore: commit-msg 1
... ...

node_modules/.bin/commitlint --verbose --from=HEAD~1
⧗   input: chore: tres
✔   found 0 problems, 0 warnings

node_modules/.bin/commitlint --verbose --from=HEAD~2
⧗   input: chore: tres
✔   found 0 problems, 0 warnings
⧗   input: chore: dos
✔   found 0 problems, 0 warnings
```

### Let's change some rules

For that we will use the `.commitlintrc.json` configuration file
See the rules we can change [here](https://commitlint.js.org/#/reference-rules)

```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "type-case": [2, "always", ["upper-case"]],
    "type-enum": [
      2,
      "always",
      [
        "FEAT",
        "FIX",
        "DOCS",
        "STYLE",
        "REFACTOR",
        "PERF",
        "TEST",
        "BUILD",
        "CI",
        "CHORE",
        "REVERT"
      ]
    ]
  }
}
```

> :question: type meanings
>
> | Type     | Meaning                                                                                                     |
> | -------- | ----------------------------------------------------------------------------------------------------------- |
> | FEAT     | A new feature                                                                                               |
> | FIX      | A bug fix                                                                                                   |
> | DOCS     | Documentation only changes                                                                                  |
> | STYLE    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
> | REFACTOR | A code change that neither fixes a bug nor adds a feature                                                   |
> | PERF     | A code change that improves performance                                                                     |
> | TEST     | Adding missing tests or correcting existing tests                                                           |
> | BUILD    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
> | CI       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
> | CHORE    | Other changes that don't modify src or test files                                                           |
> | REVERT   | Reverts a previous commit                                                                                   |

## Add a `commit-msg` Hook Using Husky

We have already installed husky. See [husky - Git Hooks](husky-git-hooks.md) in case it is not installed

```bash
# Activate hooks
npx husky install
# Add hook
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1} --verbose'
```

The .husky/commit-msg file will be created:

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit ${1} --verbose
```

### Testing The Hook

```bash
git add .
git commit -m "foo: this will fail"

⧗   input: foo: this will fail
✖   type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
```

## Using a prompt-cli

We use a prompt-cli to ensure we create a "correct" commit message for our organization.

```bash
npm install --save-dev @commitlint/prompt-cli
```

```json
"scripts": {
  ... ...
  "clint": "commit",
  ... ...
```

> :notebook:
> Another well knows prompt-cli is [commitizen](http://commitizen.github.io/cz-cli/).

### Testing the prompt-cli

Test the prompt by executing

```
git add .
npm run clint
```

## CI Setup: GitHub Actions

Linting on GitHub CI servers.

### With Direct commitlint cli

```yml
name: Pre-Push Check

run-name: ${{ github.actor }} is checking PR code before  ${{ github.event_name }}

on: [push, pull_request]

env:
  # We should determine how many commits to fetch: 1, some, or all
  DEFAULT_NUM_COMMIT: 1
  ALL_COMMITS: 0
  ONE_HUNDRED_COMMITS: 100
  # If we choose to fetch less commits that actual number of commit we will receive an error
  DEPTH_COMMIT: ${{ 0 }}
  # Last pushed commits
  FROM_COMMIT: ${{ github.event.before }}
  TO_COMMIT: ${{ github.event.after }}
  # First pushed commit but no commits yet in the remote repository
  NO_COMMITS_YET: ${{ '0000000000000000000000000000000000000000' }}

jobs:
  Check-Code:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: ./
    strategy:
      matrix:
        node-version: [14.x, 16.x]
    steps:
      - name: Check out repository code
        uses: actions/checkout@v3
        with:
          fetch-depth: ${{ env.ALL_COMMITS }}
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies
        run: npm ci
      - name: Validates the first pushed commit with commitlint
        if: ${{ github.event_name == 'push' && env.FROM_COMMIT == env.NO_COMMITS_YET }}
        run: npx --no-install -- commitlint --config='.commitlintrc' --from=${{ env.TO_COMMIT }} --verbose
      - name: Validates the last pushed commit with commitlint with a shallow checkout
        if: ${{ github.event_name == 'push' && env.FROM_COMMIT != env.NO_COMMITS_YET  && env.DEPTH_COMMIT == 1 }}
        run: git log -1 --pretty=format:"%s" | npx --no-install -- commitlint --config='.commitlintrc' --verbose
      - name: Validates last pushed commits with commitlint
        if: ${{ github.event_name == 'push' && env.FROM_COMMIT != env.NO_COMMITS_YET  && env.DEPTH_COMMIT != 1 }}
        run: npx --no-install -- commitlint --config='.commitlintrc' --from=${{ env.FROM_COMMIT }} --verbose
      - name: Validate PR commits with commitlint
        if: github.event_name == 'pull_request'
        run: npx --no -- commitlint --from=${{ github.event.pull_request.base.sha }} --to=${{ github.event.pull_request.head.sha }} --verbose
      - run: echo "🍏 This job's status << ${{ job.status }} >>"
```

> :test_tube:
> **Validates last pushed commits with commitlint**
>
> 1 Run npx --no -- commitlint --config='.commitlintrc' --from=c471d3bafe42434845e43dc648955dedb6c993d8 --verbose
>
> 9 ⧗ input: chore: merge branch 'main' of [https://github.com/fender0ne/fender-vconf](https://github.com/fender0ne/fender-vconf)
> 10 ✔ found 0 problems, 0 warnings
> 11 ⧗ input: chore: tres
> 12 ✔ found 0 problems, 0 warnings
> 13 ⧗ input: chore: dos
> 14 ✔ found 0 problems, 0 warnings
> 15 ⧗ input: chore: uno
> 16 ✔ found 0 problems, 0 warnings

> :red_circle:
> [Checkout V3](https://github.com/actions/checkout)
>
> ```yml
> fetch-depth:
>   description: 'Number of commits to fetch. 0 indicates all history for all branches and tags.'
>    default: 1
> ```
>
> Only a single commit is fetched by default, for the ref/SHA that triggered the workflow. Set `fetch-depth: 0` to fetch all history for all branches and tags. Refer [here](https://help.github.com/en/articles/events-that-trigger-workflows) to learn which commit `$GITHUB_SHA` points to for different events.

> [!note]
> if a shallow checkout is permissible (fetch-depth: 1), then update commitlint to lint only the last commit message:
>
> ```bash
> run: git log -1 --pretty=format:"%s" | npx commitlint
> ```
>
> Idea from [remarkablemark](https://remarkablemark.org/blog/2020/12/12/commitlint-in-github-actions-workflow/)

### Alternative: use `wagoid/commitlint-github-action`

See this repo [here](https://github.com/wagoid/commitlint-github-action)

```yml
name: wagoid Lint Commit Messages

on: [push, pull_request]

env:
  ALL_COMMITS: 0

jobs:
  commitlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: ${{ env.ALL_COMMITS }}
      - uses: actions/setup-node@v3
        with:
          node-version: '16.x'
      - name: Install dependencies
        run: npm ci
      # Run the commitlint action, considering its own dependencies and yours too 🚀
      - uses: wagoid/commitlint-github-action@v5
        env:
          # `github.workspace` is the path to your repository.
          NODE_PATH: ${{ github.workspace }}/node_modules
        with:
          configFile: '.commitlintrc'
      - name: Print Last commit message
        run: echo "${{ github.event.head_commit.message }}"
```

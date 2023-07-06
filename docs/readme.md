> ## [`fender-vconf`](readme.md) <img src="../imgs/favicons/fender-vconf_logo.png" width="20" align="right" alt="fender-vconf logo">
>
> A **Vanilla Configuration Template** for web/js apps: ES6+, HTML5, CSS3, Jest, Eslint, Prettier, lint-staged, Husky, github actions, Local HTTPS web server, Debugging with VSCode and Chrome.

![JAVASCRIPT](https://img.shields.io/badge/javascript-%20ES6+-orange?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-blueviolet.svg?style=for-the-badge&logo=html5&logoColor=orange)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Jest](https://img.shields.io/badge/jest-%20JsDom-%238A4182.svg?style=for-the-badge&logo=jest&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-brown.svg?style=for-the-badge&logo=markdown&logoColor=white)
![vscode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![BASH](https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-lightgrey?style=for-the-badge&logo=github&logoColor=white)
![NODE](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Google-Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

### What `Vanilla Configuration` means?

Like Vanilla JavaScript, **Vanilla Configuration** means that we are not using a script from any library or framework that configures our tools automatically for us. We are configuring them manually from scratch choosing our resources.

> ![VANILLA-JS](resources/vanillajs-button.png)  
> **Vanilla JavaScript** refers to using plain Javascript without any additional libraries or frameworks. The term became popular when Eric Wastl created the [Vanilla JS site](http://vanilla-js.com/) in 2012 as a joke. The site tries to bring attention to the fact that you can use just plain Javascript in many cases.

### and `Template`?

It's not really a template for building a web/JS app, but a template for configuring and testing the tools we use to build web apps.

## What else?

It is a set of documents that explains **how to configure the tools** that we use to create web/js apps.

### But, why?

It is a good way to learn how to configure all the tools that we use every day, but we don't know how they work. It is a lot of work, but it is worth it.

> And yes, it can be used as a starting point for building web/JS apps from scratch, without using any libraries or frameworks.

## See an example app developed using fender-vconf:

> Although fender-vconf is a work in progress, a version of it is currently being used in the candleBox-GI charting app.

<div align="center">
  <a href="https://www.youtube.com/watch?v=C0y5AN7YFtY">
    <img src="./resources/candleBox-GI_inAction_play.jpg" style="width:200px;">
  </a>
</div>

## Web Demo:

[`fender-vconf Interactive`](https://fender0ne.github.io/fender-vconf/)

## Table of Contents

- [Motivation](common/motivation.md)
- `Development Tools & Configurations`

  > We use **VSCode in Windows with Git Bash** as our integrated development environment (IDE) with some extensions and development tools, but we could use any other environment or text processor with little changes.

  - [NodeJS & npm](developerGuide/nodejs-npm.md)
  - [NPM Scripts](developerGuide/npm-scripts.md)
    - [**Concurrently**](configs/concurrently.md)
  - [Linter and Formatter](developerGuide/linter-and-formatter.md)
  - [Husky & Git Hooks](developerGuide/git/husky-git-hooks.md)
    - [**commitlint**: commit convention linter](developerGuide/git/commitlint.md)
  - [SASS](developerGuide/sass.md)
  - [A Local File Server & HTTPS](developerGuide/local-file-server.md)
  - [Git, GitHub & Github Actions](developerGuide/git/git-github.md)
  - [Debugging](developerGuide/testing-debugging/debugging-with-vscode.md)
  - [Testing](developerGuide/testing-debugging/testing.md)
  - [Working with VSCode](developerGuide/vsc/vscode.md)

- [Clean Code, clean Architecture](developerGuide/to-keep-in-mind.md)
- [Contributors](common/contributors.md)
- [License](/LICENSE)

### License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](/LICENSE)

Fender-vconf is copyright © 2023, and may be freely distributed under the MIT license.  
See the [`MIT License`](https://spdx.org/licenses/MIT.html) for details.

[fender-vconf Interactive]: https://fender0ne.github.io/fender-vconf/

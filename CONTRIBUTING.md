# Contributing to Mico Leão Dublado (EN)

👍🎉 First off, thanks for taking the time to contribute! 👍🎉

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable
behavior to victorgvbh@gmail.com.

The following is a set of guidelines for contributing to Mico Leão Dublado.
These are just guidelines, not rules, use your best judgment and feel free to
propose changes to this document in a pull request.

* [How to Contribute in Issues](https://github.com/victorgveloso/MicoLeaoDubladoAPI#issues)
* Asking for General Help? Ask on [r/StremioAddons](https://reddit.com/r/StremioAddons/) or on [Discord](https://discord.gg/WTqVGKXh)
* Do you miss a movie (or any other content) on a Mico Leão Dublado API server? **Wrong place! This is a project focused on DEVELOPING Mico Leão Dublado.** There is no Mico Leão Dublado official public server. We only host instances of Mico Leão Dublado API for testing purpose only!
</br><img src="https://i.imgur.com/RUdPyQPh.jpg" alt="drawing" width="200"/>

* [Reporting a Bug](https://github.com/victorgveloso/MicoLeaoDubladoAPI#how-to-report-bugs)
* [Submitting a Feature Request](https://github.com/victorgveloso/MicoLeaoDubladoAPI#how-to-submit-a-feature-request)
* [Submitting a Pull Request](https://github.com/victorgveloso/MicoLeaoDubladoAPI#pull-request) (Please read [our license terms](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/LICENSE) before contributing!)

## [Issues](https://github.com/victorgveloso/MicoLeaoDubladoAPI/issues)

Issues are created [here](https://github.com/victorgveloso/MicoLeaoDubladoAPI/issues).

### How to report bugs?

### How to submit a Feature Request?

### Languages

We accept issues in both English and Portuguese.
When an issue is posted in a language besides English (or Portuguese), it is acceptable and encouraged to post an English-translated copy as a reply.
Anyone may post the translated reply.
In most cases, a quick pass through translation software is sufficient.
Having the original text _as well as_ the translation can help mitigate translation errors.

Responses to posted issues may or may not be in the original language.

## [Pull Requests](https://github.com/victorgveloso/MicoLeaoDubladoAPI/pulls)

Pull Requests are the way concrete changes are made to the code and documentation
in this repository.

* [Setting up your local environment](https://electronjs.org/docs/development/pull-requests#setting-up-your-local-environment)
  * Step 0: (If you are using Windows) Install [WSL 2](https://docs.microsoft.com/pt-br/windows/wsl/install-win10)
  * Step 1: Fork it!
  * Step 2: Inside WSL 2 or a Linux distribution install... Required: [node.js](https://nodejs.org/en/download/package-manager/). Recommended: [pip](https://packaging.python.org/guides/installing-using-linux-tools/), [docker](https://docs.docker.com/engine/install/), docker-compose (`pip install docker-compose`), and a text editor (recommended: [Visual Studio Code](https://code.visualstudio.com/))
  * Step 3: Build
    * Recommended Method (Makefile): Use `make test` to run tests and `make start` to start server
    * Advanced Method (Without docker)
        1. Setup a mongodb server
        1. Setup environment variables (see [docker-compose.yml](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/docker-compose.yml) and [src/config.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/config.ts) for environment variables list)
        1. Install dependencies: `npm install`
        1. Test: `npm test`
        1. Run: `npm start`
    * Advanced Method (With docker and docker-compose)
        1. Run database (mongodb): `docker-compose up -d mongo`
        1. Test: `docker-compose run addon test`
        1. Run: `docker-compose up addon`
  * Bonus Step: Install the following extensions to Visual Studio Code:
    * [Abracadabra, refactor this!](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra)
    * [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
    * [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
    * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    * [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
    * [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
    * [Hocus Pocus](https://marketplace.visualstudio.com/items?itemName=nicoespeon.hocus-pocus)
    * [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
    * [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
    * [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
    * [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
    * [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    * [Prettify JSON](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json)
    * [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
    * [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
    * (If you're on WSL 2) [WSL workspaceFolder](https://marketplace.visualstudio.com/items?itemName=lfurzewaddock.vscode-wsl-workspacefolder)
    * [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)
* Making Changes
  * Step 4: Create a **Feature branch.** It should be prefixed by `feature/` (e.g. `feature/new-ui`)
  * Step 5a: Write tests using JavaScript and Jest.
  * Step 5b: Write source code (important: follow our [Style Guides](https://github.com/victorgveloso/MicoLeaoDubladoAPI#style-guides))
  * Step 6a: Run tests
  * Step 6b: Commit (english-only!)
  * Step 7: Rebase
  * Step 9: Push to your repository (usually configured as a git-remote named `origin`)
  * Step 10: [Open the Pull Request](https://github.com/victorgveloso/MicoLeaoDubladoAPI/compare)
      * **Attention: (1) select `victorgveloso/MicoLeaoDubladoAPI` as base repository and `main` as base branch. (2) compare to the created Feature branch on your repository**
  * Step 11: Eventually some github actions fail and you should fix them before getting a feedback.
  * Step 12: Discuss and update patch.

## Style Guides

  * Use PascalCase for classes and interfaces; use camelCase for methods and attributes; use SCREAMING_SNAKE_CASE for exported constants (globally scoped constants).
  * Always remmeber to run TSLint and use the command `Format Document` on Visual Studio Code (configured to use `vscode.typescript-language-features` as the default formatter)
  

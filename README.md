# Contract Wallets

> deploying basic contract wallets and siging messages with them via eip-1271


# 🏄‍♂️ Quick Start

Prerequisites: [Node (v16 LTS)](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)


> confirm correct node.js version:

```bash
node -v
```

    > if incorrect version installed, switch to 16 using nvm:

    ```bash 
    nvm use 16
    ```


> install and start local 👷‍ Hardhat chain:

```bash
cd contract-wallets-demo
yarn install
yarn chain
```

> run tests

```bash
yarn test
```


> in a second terminal window, start the frontend:

```bash
cd contract-wallets-demo
yarn start
```

> in a third terminal window, deploy the wallet factory contract:

```bash
cd contract-wallets-demo
yarn deploy
```

📱 Open http://localhost:3000 to see the app

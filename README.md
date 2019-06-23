# Urheberrecht in der Blockchain
Festhaltung der Urheberschaft von Bildmaterialien (Graphiken, Fotos, Video) anhand eines Etherum Smart Contracts.

## Tools
Tuffle
Ganache
Node.js
drizzle
drizzle-react
drizzle-react-components
image-hash
Bootstrap
Solidity
create-react-app
Metamask

## Autoren
Gianmarco Sigrist
Lukas Brandenberger
Michael Gardin


## Projekt Filestruktur

The default Truffle directory structure contains the following:

- **`contracts/`**: Contains the [Solidity](https://solidity.readthedocs.io/) source files for our smart contracts. There is an important contract in here called **`Migrations.sol`**, which we'll talk about later.
- **`migrations/`**: Truffle uses a migration system to handle smart contract deployments. A migration is an additional special smart contract that keeps track of changes.
- **`test/`**: Contains both JavaScript and Solidity tests for our smart contracts
- **`truffle-config.js`**: Truffle configuration file

## Installation
install truffle

npm install -g truffle


## Project Setup mit Drizzle

mkdir projectname

    cd projectname

    truffle init

    truffle version //mindesten v.5

create file Storage.sol

    

truffle create migration Storage

Copy Migration and Change Migration to Storage

start Ganache

truffle migrate

### Frontend

    sudo npm install -g create-react-app

    create-react-app app --use-npm

    cd app

    npm install drizzle drizzle-react drizzle-react-components

Create File in /src/drizzleOptions.js

    Drizzle options file

Change app.js

    App.js File

contrac json muss in app folder —> Berechtigung

Change Configuration of truffle to export to correct directory

—> truffle-config.js

module.exports = {

    contracts_build_directory: './app/src/contracts',

restart ganache

    truffle migrate

change path in drizzleOptions.js

add Container component für Console log

add loading while initialize loading react compontent

create component to show Account Balance

Create Component to interect with smart contract

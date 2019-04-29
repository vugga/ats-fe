# Alien Typer Shit: Frontend

#### User-facing web app. this code produces a simple react js web app with SSR in TS.

### Key ingredients

- **[TypeScript](https://www.typescriptlang.org/)** to ensure the highest code quality
- **[Next.js](https://github.com/zeit/next.js)** to bundle source files and render web pages both on the server and the client (SSR)

- **[React Context](https://reactjs.org/docs/context.html)** for static react state
- ~~**[Redux](https://github.com/reduxjs/redux)** for static react state~~
- **[Apollo GraphQL client](https://github.com/apollographql/apollo-client)** to get data from the backend
- **[Styled components](https://www.styled-components.com/)** to produce well-structured and collision-free CSS
- **[Lodash](https://lodash.com/)** to leverage common utility functions
- **[ESLint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** to ensure that source files are error-free and easy to read
- **[Docker](https://www.docker.com/)** to make the production version of the microservice straightforward to deploy
- **[GitLab CI](https://about.gitlab.com/features/gitlab-ci-cd/)** to automatically check code quality and generate a new docker image on every push

## Running a local copy

1.  Ensure you have the latest git, Node.js and Yarn installed on your machine

    ```bash
    git --version
    ## ≥ 2.14

    node --version
    ## ≥ 10.0

    yarn --version
    ## ≥ 1.10
    ```

1.  Clone the repo

    ```bash
    cd PATH/TO/MISC/PROJECTS
    git clone https://github.com/vugga/ats-fe.git
    cd ats-fe
    ```

1.  Install npm dependencies using Yarn

    ```bash
    yarn
    ```

1.  Copy `.env.dist` to `.env`. You can have a look at [`src/config.ts`](src/config.ts) for hints on what is expected.

1)  Start the server in development mode

    ```bash
    yarn dev
    ```

    Modifying any of the files will refresh the app, thanks to Next.js hot module reloading.
    To stop running the server, press `ctrl+c`.

1)  If you want to test a production copy of the microservice, build and run it like this:

    ```bash
    yarn build
    yarn start
    ```

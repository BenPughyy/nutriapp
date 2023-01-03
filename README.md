# Getting Started with Nutri App - Development

To develop on this project, clone the repo using the command:

```bash
git@github.com:BenPughyy/nutriapp.git
```

When you have the project locally, run:

```bash
nvm use
```

This will install the correct version of node from the projects `.nvmrc` file, ensuring the same version of node across the development process.

After this has been done, run:

```bash
npm install
```

To install all required dependencies.

To start up the server on `localhost:3000`, run:

```bash
npm start
```

## Running the app full stack with the backend

To get the frontend app running, follow the guidelines above for basic install.

Next steps are to clone down the backend repo found here: https://github.com/LukeCharles555/nutriapp-backend

On the backend repo, first run:

```bash
nvm use
```

to get the version of node the project was written in.
Then run:

```bash
npm install
```

To install required dependencies.
There is a `keys.js.example` file in there, contact me (LukeCharles555) for required login information.

Once the login credentials are obtained, rename the example file to just `keys.js`, this will allow the code to use the creds for DB connection.

Once that step is completed, run:

```bash
npm start
```

This will load up a local server on `http://localhost:4000`.

The last step will be to change the name of the `.env.example` file to just `.env` in the Frontend repo. Then simply run:

```bash
npm start
```

and that should connect the frontend up with the backend server and the DB.

Steps:


First, ensure that you are in the correct directory where you want to create your React project. If you are already in the correct directory, proceed to the next step.

Before you run npm install, you need to initialize a new project. This can be done by running npm init. This command will prompt you to enter some information such as the project’s name, version, description, etc. Once you go through the prompts, it will create a package.json file for you.

You could also use npm init -y to automatically set everything to default and create the package.json file without prompting you for any input.

Once you have your package.json file, you can then run npm install.

Alternatively, if you are trying to create a new React app, you might want to use create-react-app which sets up everything for you:

npm install react-scripts
npx create-react-app my-todo-app
cd my-todo-app


This will create a new React application with a default setup including a package.json file. 
You can then replace the default files with the ones provided in this repo.

Always make sure to npm install the dependencies and then npm start the dev server
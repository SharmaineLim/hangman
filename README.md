# [Hangman](https://sharmainelim.github.io/hangman/)

This will be a website where you can play hangman.

## Set up for local development

Right now, this site is made up of HTML pages and Javascript files
in the `src/` folder.

If you already have Node.js set up
([See front-end tooling documentation](docs/frontend-tooling.md)):

- run `npm install` to install the dependencies, and then
- run `npm run dev`.

You should now be able to access the site at http://localhost:5173/hangman/.

## Deploy to GitHub Pages

All commits pushed to the `main` branch will trigger the deployment workflow,
which will:

- compile the HTML and JS files,
- copy the built files into the branch that Pages use (`gh-pages`).

## Technologies

This project uses the following technologies:

- [Vite.js](https://vitejs.dev/) as the development server & for bundling
- [React](https://reactjs.org/) for building the interface
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for typing

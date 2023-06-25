# Continuous Integration

## Deployment workflow

All commits pushed to the `main` branch will trigger the deployment workflow
and update the live site.

## Git branching

1. Branch off from the `main` branch.
2. Make your changes on the new branch.
3. Push the new branch onto GitHub.
4. Make a pull request against the `main` branch.

## Code styleguide

### Formatters

This project uses the following tools to enforce code style formatting:

- [Prettier](https://prettier.io/) for supported languages

Make sure to have all integrated with your editor to auto-format when saving
files, or to manually run them before committing:

- `npm run format` for Prettier

### Linters

This project also uses the following linters:

- [ESLint](https://eslint.org/) for Javascript

These can be manually run with:

- `npm run lint:js`

All the linters can also be run at once with `npm run lint`.

## Automatic formatting & linting locally

You can also run the linting tests automatically before committing. This is
optional. It uses pre-commit, for which a .pre-commit-config.yml file is
included in the project.

To use the automatic linting when making commits on your host machine, you must
install pre-commit. You can either create a virtualenv to use with the project
or install globally. Instructions are at https://pre-commit.com/#install.

Pre-commit will not run by default. To set it up, run `pre-commit install`
on your host machine if you installed pre-commit there.

# YuGiOhApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Description of development process

As a starting point, `deck` and `card` class models were defined and created. Next the `card-list` component and a service for each model (`deck` and `card`).
Next phase was creating the "selected card information" view, `card-information` component. This is the basic logic of the controllers.

Then the UI was developed with responsiveness in mind. Details and refactoring came last.

This is not a TDD, the unit tests were written at almost random points of development but mostly after defining each component.
These unit tests DO NOT cover everything that could be tested. It's mostly the developer's attempt in unit testing.
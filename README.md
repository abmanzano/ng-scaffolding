# NgScaffolding

Project intended as scaffolding for building responsive frontend applications.

# Libraries and Tools

## Angular

[Angular CLI](https://github.com/angular/angular-cli) version 9.1.4

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Bootstrap

[Bootstrap](https://getbootstrap.com/) version 4.4.1

- Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.

- For the Bootstrap components that need Javascript we are not importing jquery and popper. Instead, we use ng-bootstrap, leaving the manipulation of the DOM directly to Angular.

- From Bootstrap library imported in node_modules, only CSS is imported in this project.

- npm is in package.json

- css is imported in angular.json

## ng-bootstrap

[ng-bootstrap](https://ng-bootstrap.github.io/#/home) version 6.1.0

- Angular widgets built from the ground up using only Bootstrap 4 CSS with APIs designed for the Angular ecosystem.

- No dependencies on 3rd party JavaScript.

## Angular localize polyfill

- The first step to setting up localization when using the Angular CLI is to add the @angular/localize package to the project. 

# Licence

The MIT License (MIT)
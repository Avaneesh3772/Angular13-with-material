# AngularVersion13

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

=======================================================================================
**Project Setup And Dependecies - By Avaneesh Mishra 27th December 2022**

1) To Create new Angular Project, run below command:
ng new <Project-Name>

2) To install angular material, run below command:
$ npm install --save @angular/material @angular/cdk @angular/animations
$ ng add @angular/material

3) To install angular bootstrap jquery and popper, run below command:
$ npm install --save bootstrap jquery popper.js
  
4) To install moment, run below command:
$ npm install moment --save

5) To install Material Moment Adapter, run below command:
$ npm install @angular/material-moment-adapter

6) To install specif version, first uninstall current version and then install specfic version. 
npm uninstall --save @angular/material
npm uninstall --save @angular/cdk
npm uninstall --save @angular/material-moment-adapter

npm install --save-exact @angular/material@13.3.9
npm install --save-exact @angular/cdk@13.3.9
npm install @angular/material-moment-adapter@13.2.0
  
=======================================================================================
 ** Push Codebase to Github - By Avaneesh Mishra 27th December 2022**
  - First make Git Repositery in GitHub
  - Then Add, commit your code chnages
  - Then run below command:
    git remote add origin https://github.com/Avaneesh3772/Angular13-with-material.git
  - Then git push -u origin master
 =======================================================================================
 ** Some useful shortcuts - By Avaneesh Mishra 27th December 2022** 
ng generate module templates --route templates --module app.module
ng generate interceptor auth-token
ng generate guard admin
ng generate component admin
ng generate service admin
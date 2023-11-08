

### Prerequisites
- Node 7.0+
- NPM 5.0+

### Installation

- Clone this repository:
- Install npm dependencies: `npm install`
- Run the development server: `ng serve`

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you want to test the service worker or offline functionality:

- Build the files for production: `ng build --prod`.
- Install Node HTTP Server globally (should just need to do once): `npm install -g http-server`.
- Navigate to the dist folder: `cd dist`.
- And run the server: `http-server -c-1 .`.

Your app should be running in production mode at `http://localhost:8080/`.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Linting

Run `npm run lint` to execute the linter via [TSLint](https://palantir.github.io/tslint/).

### Building

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build and the `--aot` flag for ahead-of-time compilation (recommended).


## Deploying

Once you have built the files, you can copy them into a file hosting service like Azure's Blob Storage or Amazon S3. The following tutorials should help you get started:

- [Tutorial for Azure](https://blog.codeship.com/serving-an-angular-app-on-azures-cdn-with-codeship-and-docker/)
- [Tutorial for S3](https://johnlouros.com/blog/host-your-angular-app-in-aws-s3)

## Special Thanks

This project was built on the back of many great open source projects. Here are a few of them:

- [Angular](https://angular.io/)
- [NGRX Store, Effects](https://github.com/ngrx/platform)
- [@ngx-pwa/local-storage](https://www.npmjs.com/package/@ngx-pwa/local-storage)
- [JSONbin.io](https://jsonbin.io/)
- [Bootstrap](https://getbootstrap.com/)
- [iconic icons](https://useiconic.com/open/)



# Angular Google Maps

This is an example for using Angular 9 with Google Maps API.

## Prerequisites
* [Node.js®](https://nodejs.org/en/download/) at least 10.x and a npm package manager.
* Angular 9(if you have an earlier version, check out [this tutorial](https://angular.io/guide/updating-to-version-9))

## Installation

1. First of all you need to create a new Angular project. If you already have one, you can skip this step.
```bash
ng new angular-maps --routing
```
For more information visit [official documentation](https://angular.io/guide/setup-local).

2. Go to your project and install this package.
```bash
cd angular-maps
npm install @angular/google-maps
```
3. Add `GoogleMapsModule` module to the import declaration in your AppModule or any other module where you want to use google maps.
4. In `index.html` add this script `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>`.
5. The last you need is an API key, you can get it [here](https://developers.google.com/maps/documentation/javascript/get-api-key). 

## Community
* Please send us your suggestions on how we make this code even more useful for the development community or contribute to this repo!
* Check out our [blog](https://oril.co/blog) with more articles!


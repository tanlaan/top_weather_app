# top_weather_app
The Odin Project's weather app project.

## Getting Started

In order to make use of this MVP you will need an API key from [Open Weathermap](https://openweathermap.org/)

After you have signed up you can get a copy of you generated apikey. You will need to put this into a file called `secret.js` that must be created in the `/src/` folder.

It should end up like `export const apiKey = ''` where you will past your apikey as the string.

After that, at the root folder you can run `npm install` in order to pull in webpack. A final `npx webpack` in the root folder should build the app into the `/dist/` folder.

Once built you can use any local web server to serve the page to try it out.

As an example, you can install `local-web-server` from npm by running `sudo npm -g install local-web-server`. This will allow you to `cd` into the `/dist/` folder and run the command `ws` to start up a barebones web server locally on port 8000 by default.

Have fun!

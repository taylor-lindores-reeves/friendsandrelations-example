/*
  Okay folks, want to learn a little bit about webpack?
*/
const path = require('path');
const webpack = require('webpack');
require('babel-polyfill');

/*
  webpack sees every file as a module.
  How to handle those files is up to loaders.
  We only have a single entry point (a .js file) and everything is required from that js file
*/

// This is our JavaScript rule that specifies what to do with .js files
const javascript = {
    test: /\.(js)$/, // see how we match anything that ends in `.js`? Cool
    use: [{
        loader: 'babel-loader',
        options: { 
            presets: ['env'],
            ignore: '/node_modules/'
        } // this is one way of passing options
    }],
};

// OK - now it's time to put it all together
const config = {
    entry: ['babel-polyfill', './js/app.js']
        // we only have 1 entry, but I've set it up for multiple in the future
    ,
    // Once things are done, we kick it out to a file.
    output: {
        // path is a built in node module
        // __dirname is a variable from node that gives us the
        path: path.resolve(__dirname, 'temp', 'scripts'),
        // we can use "substitutions" in file names like [name] and [hash]
        // name will be `App` because that is what we used above in our entry
        filename: '[name].bundle.js'
    },

    // remember we said webpack sees everthing as modules and how different loaders are responsible for different file types? Here is is where we implement them. Pass it the rules for our JS and our styles
    module: {
        rules: [javascript]
    },
};
// webpack is cranky about some packages using a soon to be deprecated API. shhhhhhh
process.noDeprecation = true;

module.exports = config;
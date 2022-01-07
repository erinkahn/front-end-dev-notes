// adding webpack to a blank new project


// Part 1 - Configuring the Node Project
    // initialize the Node project
        npm init -y

    // define the build and start commands in the scripts section of package.json. build should run webpack --watch and start should run webpack serve --open. These will allow us to bundle and view our project.
    // Inside the scripts section of our package.json, we want build to run webpack --watch and start to run webpack serve --open.
        scripts: {
            "build" : "webpack --watch",
            "start" : "webpack serve --open"
        }

    //install the npm packages our project needs as developer dependencies:
        npm install webpack webpack-cli webpack-dev-server --save-dev
        npm install style-loader css-loader --save-dev

    // it should look like this
        "devDependencies": {
            "css-loader": "^6.5.1",
            "style-loader": "^3.3.1",
            "webpack": "^5.65.0",
            "webpack-cli": "^4.9.1",
            "webpack-dev-server": "^4.7.2"
          }



// Part 2 - Configuring Webpack
    // Create a Webpack configuration file, and set the mode to development.
        module.exports = {
            mode: 'development',
        }
    
    // make sure Webpack can find the code we want to bundle so define the entry point according to where the code for the project is stored
        const path = require('path');

        module.exports = {
            mode: 'development',
            entry: './src/js/main.js', 
            
    // decide where you want your endpoint to be when the code gets bundled and compiled (which folder is created)
    // leaving it blank will automatically create a dist folder where your compiled JS will be
    // change it to a folder called 'bundledJS' and a JS file called 'bundled_main.js'
            entry: './src/js/main.js',    
            output: {
                filename: 'bundled_main.js',
                path: path.resolve(__dirname, 'bundledJS'),
            },

    // add rules in the config file for CSS, fonts, and images
    // We will be using .css for our CSS, .woff and .woff2 file types for our fonts, and .png for our images.
        rules: 
        [
            {
                test: '/\.css$/i',
                use: ['style-loader, css-loader']
            },
            {
                test: '/\(.woff|.woff2)$/i',
                type: 'asset/resource'
            },
            {
                test: '/\.png$/',
                type: 'asset/resource'
            }
        ]

          
          
// Part 3 - Bundling the CSS
    // With Webpack, we can include CSS through our JavaScript
    // Delete the style link in the head tag of the HTML
    // import the CSS within main.js using the Webpack syntax
        import './styles.css';

          
          
// Part 4 - Bundling the JavaScript
    // we are only going to need one <script> tag in our HTML
    // add one that embeds the JS code of our exit point
        <script src="dist/main.js"></script>
            
    // link all our JS using es6 export and import statements
    // export all functions at the bottom of each JS file except for the main.js file
    // inside other JS file
        export {functionName, functionName2}

    // inside main.js
        import {functionName, functionName2} from './src/otherJSfile.js';



// Part 5 - Bundling Images
    // Import the icons from the asset folder using the Webpack syntax, and replace their URLs with the named import values.
    // in main.js
        import Square from '../square.png';
    
    // Once imported, we can use the image as a variable 
        img.src = Square;



// Part 6 - Building and Viewing Our App
    // to run the build and see our updates open the terminal
    //run the build command in one terminal
        npm run build
        
    // run the start command in another terminal
        npm run start


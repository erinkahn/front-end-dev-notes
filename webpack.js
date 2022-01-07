// webpack
    // node package
    // compiles our code files to improve performance and get rid of unused code


// setup instructions:
   // 1. create package.json file
    npm init 
    
   // 2. install webpack and webpack CLI
    npm install --save-dev webpack webpack-cli

   // 3. make an entry point where the main bundle file will be
      // the default entry point is index.js in a src folder, but can be changed inside the webpack.config.js file (see below)
      // if there's no folder already, create a src folder and inside create a index.js file that is empty
      // after changes are made and files are saved, the files inside src will now compile to a dist folder dist/main.js
  
   // 4. add scripts to package.json to watch webpack to look for updates to our files and rebuild if changes occur
      scripts": {
        "build": "webpack --watch",
      },
   
   // 5. run the build command to start:
       npm run build
            // this will create a dist folder of your compiled file (main.js)
    

// to set settings or configuration 
       // create a new file called webpack.config.js, then set the mode to dev
       module.exports = {
          mode: 'development' //(switch to 'production' when you finish development so it compiles)
       }
       // if you check the compiled file dist/main.js, you'll see notes explaining what's happening. 
       // they will be removed when the mode is set to 'production'
        

// to change the entry point & exit point   
       // note: if you change the entry point but don't change the exit point, it will always compile to an exit point of dist/main.js
       // go to webpack.config.js
       // say you want to create an outpoint folder called built and inside that a file called fast.js, you would write:
        const path = require('path');

        module.exports = {
            entry: './application/home.js',
            output: {
                filename: 'fast.js',
                path: path.resolve(__dirname, 'built'),
            },
            // ...
        }
    

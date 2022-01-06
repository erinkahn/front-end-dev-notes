// webpack
    // node package
    // compiles our code files to improve performance and get rid of unused code


// setup instructions:
   // 1. create package.json file
    npm init 
    
   // 2. install webpack and webpack CLI
    npm install --save-dev webpack webpack-cli

   // 3. make an entry point where the main bundle file will be
      // the default entry point is index.js in a src folder, but cna be changed
  
   // 4. add scripts to package.json to watch webpack to look for updates to our files and rebuild if changes occur
      scripts": {
        "build": "webpack --watch",
      },
   
   // 5. run the build command to start:
       npm run build
    

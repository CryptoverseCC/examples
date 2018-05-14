const { execSync } = require('child_process');
const { ncp } = require('ncp').ncp;
const fs = require('fs');
const path = require( 'path' );
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');


console.log("Building Examples");

const source = `${__dirname}/examples/`;
const collectionFile = `${__dirname}/src/examples.json`;
const publicExamplesPath = `${__dirname}/public/examples/`;

rimraf(publicExamplesPath, () => { 
  fs.mkdirSync(publicExamplesPath);
  build(source);
});


function build(source) {
  //Reset collection file
  fs.writeFileSync(collectionFile, JSON.stringify([]));

  // Loop through all the files in the source directory
  fs.readdir( source, function( err, files ) {
    if (err) { throw err; } 

    files.forEach( function( name, index ) {
      var examplePath = path.join( source, name );

      fs.stat( examplePath, function( err, stat ) {
        if (err) { throw err; }

        if (stat.isDirectory()) {
          buildExample(name);
        }
      });
    });
  });
}

function buildExample(name) {
  console.info(`Building ${name}`);

  const examplePath = `${__dirname}/examples/${name}`;
  const publicPath = `${__dirname}/public/examples/${name}`;
  
  execSync('yarn install', {cwd: examplePath});
  
  execSync('yarn build', {cwd: examplePath});

  let stat = fs.stat(publicPath, (err, stat) => {
    if (err) {
      fs.mkdirSync(publicPath);
    }  

    ncp(`${examplePath}/build`, publicPath, function (err) {
      if (err) { throw err; } 

      let packageJson = fs.readFileSync(`${examplePath}/package.json`);
      let packageData = JSON.parse(packageJson);

      let entry = {
        "id": name, 
        "title": packageData.name, 
        "description": packageData.description, 
      }

      let data = fs.readFileSync(collectionFile);
      let entries = JSON.parse(data);
      entries.push(entry);
      
      fs.writeFileSync(collectionFile, JSON.stringify(entries));

      console.log(`${name} done!`);
    });
  });  
}

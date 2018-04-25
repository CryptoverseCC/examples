const { spawn } = require('child_process');
const { ncp } = require('ncp').ncp;
const fs = require('fs');

console.log("Building Examples");

const build = spawn('yarn', ['build'], {cwd: __dirname + '/examples/links'});

build.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

build.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

build.on('close', (code) => {
  console.log(`child process exited with code ${code}`);

  let stat = fs.stat(__dirname + '/public/examples/links', (err, stat) => {
    if (err) {
      fs.mkdir(__dirname + '/public/examples/');
      fs.mkdir(__dirname + '/public/examples/links');
    }  

    ncp(__dirname + '/examples/links/build', __dirname + '/public/examples/links', function (err) {
      if (err) {
       return console.error(err);
      }
      console.log('done!');
    });
  });

});



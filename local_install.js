const npm = require('npm');

var filePath = './dist/go-lib/tangoe-goponents-' + require('./projects/go-lib/package.json').version + '.tgz'
npm.load(function(err) {

  npm.commands.install([filePath], function(er, data) {
    console.log(er);
  });

});
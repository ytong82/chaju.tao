// Print figlet message
var figlet = require('figlet');
console.log(figlet.textSync('Chaju . Tao', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

// Check input arguments
if (process.argv.length < 3) {
    console.log('Usage: chaju.tao.js <some URL>');
    process.exit();
} else {
    // print welcome message
    var welcomeMsg = 'Start to run chaju.tao ...';
    console.log();
    console.log(welcomeMsg);
    console.log('Developed by David Tong (ytong82@towing.top)');
    console.log();
}
url = process.argv[2];

// Start PhantomJS process
var path = require('path');
var iconv = require('iconv-lite');
var filterCount = 0;

var phantomjs = require('phantomjs-prebuilt');
var binPath = phantomjs.path; 
var childArgs = [
  path.join('chaju.tao.js'),
  url
];

const spawn = require('child_process').spawn;
const chajuTao = spawn(binPath, childArgs);

chajuTao.stdout.on('data', function(data) {
    process.stdout.write(iconv.decode(data, 'gbk'));
});

chajuTao.stderr.on('data', function(data) {
    process.stdout.write(iconv.decode(data, 'gbk'));
});
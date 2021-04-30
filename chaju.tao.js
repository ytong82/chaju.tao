// config
phantom.outputEncoding='gbk';

// parse feedId
function getFeedId(url) {
    var parameters = url.slice(url.indexOf('?') + 1).split('&');
    var pairs = {};
    for (var index = 0; index < parameters.length; index++) {
        parameter = parameters[index].split('=');
        pairs[parameter[0]] = parameter[1];
    }
    return pairs['feedId'];
}

// create log file
function createLogFile(fs, feedId) {
    
    // whether logs folder existed
    var path = 'logs';
    if (fs.exists(path) && fs.isDirectory(path)) {
    } else {
        if (fs.makeDirectory(path)) {
            console.log('"' + path + '" was created.');
        } else {
            console.log('"' + path + '" is not created.');
            phantom.exit();
        }
    }

    // touch log file
    timestamp = new Date().getTime();
    fileName = 'taobaolive.' + feedId + '.' + timestamp;
    logFile = path + '/' + fileName;
    fs.touch(logFile);
    
    // return log file
    return logFile;
}

// parse input args
system = require('system');

if (system.args.length === 1) {
    console.log('Usage: chaju.tao.js <some URL>');
    phantom.exit();
}
url = system.args[1];

// create log folder and file
fs = require('fs');
feedId = getFeedId(url);
logFile = createLogFile(fs, feedId);

// open page
var webpage = require('webpage').create();
var moment = require('moment');
var filterCount = 0;

// replace live-room-min.js
webpage.onResourceRequested = function(requestData, networkRequest) {
    if(requestData.url == 'https://g.alicdn.com/mtb/tblive-pc/0.4.9/live-room/live-room-min.js'){
        networkRequest.abort();
    }
};

// print danmu message out
webpage.onConsoleMessage = function(msg, lineNum, sourceId) {
    // console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")'); 
    filterCount++;
    if (filterCount > 5) {
        var dateTime = moment().format('YYYY-MM-DD HH:mm:ss');
        var logLine = dateTime + ' ' + msg; 
        console.log(logLine);
        fs.write(logFile, logLine + '\n', 'a'); 
    } 
    if(msg == "endLiveVideo"){
        phantom.exit();
    }
};

// turn off error message
webpage.onError = function(msg, trace) {
    var msgStack = ['ERROR: ' + msg];
    if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function(t) {
            msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
        });
    }
    // uncomment to log into the console 
    // console.error(msgStack.join('\n'));
};

// inject live-room-min.js
webpage.open(url, function (status) {
    webpage.injectJs("lib/live-room-min.js");
});
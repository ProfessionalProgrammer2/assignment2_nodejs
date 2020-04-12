const util = require("util");
const request = require('request');
const requestPromise = util.promisify(request);

const argv = require('yargs').argv;

var employeeID = argv.employeeID;

requestPromise("http://localhost:3000/employeedetails/" + employeeID + "/", {
    method : "get"
}).then((response)=>{

    console.log(JSON.parse(response.body));
})
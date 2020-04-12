const request = require("request");
const axios = require("axios").default;
const util = require("util");

const argv = require('yargs').argv;

var employeeID = argv.employeeID;

var projectID = argv.projectID;

// console.log(employeeID + "hi");

axios.get("http://localhost:3000/employee/" + employeeID + "/").then((response)=>{
    console.log(response)
    console.log(employeeID);
})
.catch((err)=>{
    console.log(err)
})

axios.get("http://localhost:3000/projects/" + projectID + "/").then((response)=>{
    console.log(response)
    console.log(projectID);

})
.catch((err)=>{
    console.log(err)
})

// axios.post('http://localhost:3000/employee', {
//   "name": "whoa",
//   "number": "111",
//   "id": 13
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
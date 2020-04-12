// 'use strict';

// const fs = require('fs');


// const express = require('express');
// const app = express();

// const productRoutes = require('./api/routes/products');

// app.use('/products', productRoutes);

// module.exports = app;

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//  var data;
//  var user;
// try { 
//   data = fs.readFileSync('./data/EmployeeDetail.json', (err, data) => { 
//     console.log(err);
//     console.log(data); 
   
//   });
//   if(data != null)
//   {
//     user = JSON.parse(data)
    
//   }
//   else
//   {
//    console.log("data is null")
//   }
 
// } 
// catch (err) 
// { 
//   console.log(err) 
// }


// var data1;
// var user1;
// try { 
//  data1 = fs.readFileSync('./data/ProjectDetail.json', (err, data) => { 
//    console.log(err);
//    console.log(data); 
  
//  });
//  if(data1 != null)
//  {
//    user1 = JSON.parse(data1)
   
//  }
//  else
//  {
//   console.log("data1 is null")
//  }

// } 
// catch (err) 
// { 
//  console.log(err) 
// }


// readline.question('Please Enter Employees Name:  ', Empname => {
//     readline.question('Please Enter Employees Detail:  ', Empdetail => {
//         readline.question('Please Enter Employees Project ID:  ', EmpID => {
//              console.log(`Hey there ${Empname}!`);
//              console.log(`Detail ${Empdetail}!`);
//              console.log(`ID ${EmpID}!`);

//              if(user != null)
//              {
//                user.push({"EmployeeName":Empname, "Detail":Empdetail, "EmployeeID":EmpID});
//              }else{
             
//                console.log("push data")
//              user = [{ 
//                EmployeeName : Empname, 
//                Detail : Empdetail, 
//                EmployeeID : EmpID  
//            }];
//          }



// readline.question('Please Enter Employees Detail:  ', Projectdetail => {
//     readline.question('Please Enter Employees Project ID:  ', ProjectID => {
//          console.log(`Detail ${Projectdetail}!`);
//          console.log(`ID ${ProjectID}!`);


//          if(user1 != null)
//              {
//                user1.push({"Detail":Projectdetail, "EmployeeID":ProjectID});
//              }else{
             
//                console.log("push data")
//              user1 = [{  
//                Detail : Projectdetail, 
//                EmployeeID : ProjectID  
//            }];
//         }

//         let data = JSON.stringify(user, null, 2);
//         fs.writeFileSync('./data/EmployeeDetail.json', data);

//         let data1 = JSON.stringify(user1, null, 2);
//         fs.writeFileSync('./data/ProjectDetail.json', data1);
//         });
//     });
//         });
//     });  
// });







//const fs = require("fs"); //common js import
 import fs from 'fs'      //es6 module js import

// console.log(fs)

//  1------------- writeFileSync() Function--------------------------
//     synchronous function
//     it is blocking function
//     it is used when we want to complete a task before moving to next task
const withWriteFileSync = () => {
  console.log("starting");
  fs.writeFileSync(
    "hello.txt",
    "hello world this file is created with fs writeFileSync function"
  );
  console.log("ending"); //this console run after writing a file because it is synchronous function
};

//  2------------- writeFile() Function---- Recommended----------------------

//asynchronous function
//it is non-blocking function, it will not wait for the task to be completed before moving to the next one
//it is used when we want to complete a task before moving to next task
const withWriteFile = () => {
  console.log("starting");
  fs.writeFile(
    "hello2.txt",
    "hello world this file is created with fs writeFile function",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file created");
      }
    }
  );

  console.log("ending");
};

//  3------------- readFile() Function--------------------------

const readFile = async () => {
  fs.readFile("hello2.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
    }
  });
};

// Note:
/* 
        The approach we use will become a callback hell callback and 
        then another callback you can open callback.js to see what is a callback hell
*/

// withWriteFile()
// withWriteFileSync()
readFile();

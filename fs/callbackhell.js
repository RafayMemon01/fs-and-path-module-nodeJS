import fs from 'fs'

// This is how callback hell looks like 

(() =>{


    fs.writeFile(
        //filename        //text                                                    //callback
        "hello2.txt", "hello world this file is created with fs writeFile function", () => {
          console.log("file write done")
          fs.readFile("hello2.txt", "utf-8", (err, data) => {
              console.log(err);
              console.log(data);
              //again
              fs.writeFile(
                //filename        //text                                                    //callback
                "hello2.txt", "hello world this file is created with fs writeFile function", () => {
                  console.log("file write done")
                  fs.readFile("hello2.txt", "utf-8", (err, data) => {
                      console.log(err);
                      console.log(data);
                      //again
                      fs.writeFile(
                        //filename        //text                                                    //callback
                        "hello2.txt", "hello world this file is created with fs writeFile function", () => {
                          console.log("file write done")
                          fs.readFile("hello2.txt", "utf-8", (err, data) => {
                              console.log(err);
                              console.log(data);
                              //again
                          });
                        }
                      );
                  });
                }
              );
          });
        }
      );


  
})()


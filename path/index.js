import path from 'path'

const myPath = "C:\\Users\\rafay\\OneDrive\\Documents\\Backend\\fs and path module - nodejs\\path\\path.txt>"

// console.log(path)
console.log(path.extname(myPath)) //extension name
console.log(path.dirname(myPath)) //directory name
console.log(path.basename(myPath))//base filename name

console.log(path.join('c:/',"programs\\hello.txt"));  //c:\programs\hello.txt
console.log(path.resolve('c:/', "programs\\hello.txt")); //c:\programs\hello.txt
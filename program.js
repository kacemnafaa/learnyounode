// console.log('HELLO WORLD')
// const_=require('global');
// console.log(_.sum([4,5,8,9,7]).toString())
//  const process = require('process');
//  const _=require('lodash')
//  const tab=process.argv
//  const tab1=tab.slice(2)
//  const tab2=Number(tab1)
// // const tab2=parseInt(tab1)
// let sum=_.sum(tab1)
// console.log(tab1)
// process.argv.forEach(function(val, index, array) {
//    let tab1=(index + ': ' + val);
//   });
// let result=0
// for (var i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i]);
//   }

//    console.log(result)
// // console.log( Number(process.argv[2]))
// var fs=require('fs')
// const str=fs.readFileSync(process.argv[2])
// // const str='lkfldkflqkf qkfq ldfk lkflqkfl '
// var str1=str.toString().split('\n').length-1
// console.log(str1)
// var fs = require('fs')  
//  var process = require('process')

//  console.log(process.argv)

// var path = require('path')
// console.log(path.extname('myFile.txt'))  
  
// fs.readFile(file, function (err, contents) {  
//   // fs.readFile(file, 'utf8', callback) can also be used  
//   var lines = contents.toString().split('\n').length - 1  
//   console.log(lines)  
// })
// fs.readFile('texte.txt',function(err,data){
//     var list=data.toString()
//     console.log(list)
// })
// //exercice 5
// var fs = require('fs')
// var path = require('path')
 
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
 
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function(file) {
//       if (path.extname(file) === ext) {
//           console.log(file)
//       }
//   })
// })
//exercice 6

var filterFn = require('./mySolution')
var dir = process.argv[2]
var filterStr = process.argv[3]
 
filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)
 
  list.forEach(function (file) {
    console.log(file)
  })
})
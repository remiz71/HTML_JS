// // const prom_my = new Promise(function (resolve,reject)
// // {
// //     console.log("Work async");
// //     resolve("hello,js");
// // });
// //
// // prom_my.then(function (value){
// //     console.log(`"promise for date: ${value}`)
// // })
// var num1 = 10;
// var num2 = 3;
//
// function calc(num1, num2)
// {
//     return new Promise(function (resolve){
//         const res = num1/num2;
//         resolve(res);
//     }).then(function (value){
//         console.log(`"Res = ${value}"`)})
// }
// calc(100,50);
//

const all_promise = new Promise(resolve => resolve("Hello"))
.then(value => value+" JS")
    .then(value => value+ " !!!")
.then(value => console.log(value))
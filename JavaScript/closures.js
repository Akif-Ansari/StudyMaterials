//5. Creating  a private varaible
// const counter = () => {
//     let _counter = 0;
//     return () =>  ++_counter;
// }
// const inc = counter();
// console.log(inc())
// console.log(inc())
// console.log(inc())
// console.log(inc())
// console.log(inc())

//6. Ecommerce counter
// const cartCounter = () => {
//     let _count = 0;
//     const updateCount = (val) => {
//            _count += val;
//     }
//     return {
//         increment:() => {
//             updateCount(1);
//         },
//         decrement:() =>{
//             updateCount(-1);
//         },
//         value:() =>{
//             return _count;
//         }
//     }
// }
// const counter = cartCounter();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.increment();
// console.log(counter.value())

//7. Module Design pattern
// const Module = (() => {
//   const privateMethod = () => {
//     console.log("private ")
//   }
//   return {
//     publicMethod:() => {
//         console.log("public");
//         privateMethod();
//     }
//   }
// })();

// Module.publicMethod();

//8. Function runs only once
// const func = () =>{
//     let count = 0;
//     return function(){
//         if(count > 0){
//             return "Called";
//         }else{
//             count += 1;
//             return "Calling first time";
//         }
//     }
// }
// const res = func();
// console.log(res())
// console.log(res())
// console.log(res())
// console.log(res())

//9. Once Polyfill
//  function once(func,context){
//     let ran;
//     return () => {
//        if(func){
//         ran =  func.apply(context||this,arguments);
//         func = null;
//        }
//        return ran;
//     }
//  }
//  const hello = once(() => console.log("hello function"));
//  hello();
//  hello();

//10. Memoize polyfill
// const memoize = (func, context) => {
//   let memo = {};
//   return (...args) => {
//     const argCache = JSON.stringify(args);
//     if (!memo[argCache]) {
//       memo[argCache] = func.apply(context || this, ...args);
//     }
//     return memo[argCache];
//   };
// };
// const res = memoize((a, b) => {
//   let sum = 0;
//   for (let i = 0; i <= 10000000; ++i) {
//     sum += i;
//   }
//   return sum;
// });
// console.time("abc");
// console.log(res());
// console.timeEnd("abc");
// console.time("a");
// console.log(res());
// console.timeEnd("a");

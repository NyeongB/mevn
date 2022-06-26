// let a = 1;

// if (true) {
//   console.log(a);
//   let a = 2;
// }

// function a() {
//   return 1;
// }

// const b = () => 1;

// console.log(a());
// console.log(b());

// const a = (b = 2) => {
//   return b;
// };

// console.log(2 / a());

//2.3.1

// const func1 = (e, index) => {
//   console.log(`${index}번째 요소는 ${e}입니다.`);
// };

// const func2 = (e, index) => e * 2;
// const func3 = (prev, curr, index) => prev + curr;
// const func4 = (e) => e % 2;

// const a = [1, 2, 3, 4, 5].forEach(func1);
// console.log(a);

// const b = [1, 2, 3, 4, 5].map(func2);
// console.log(b);

// const c = [1, 2, 3, 4, 5].reduce(func3);
// console.log(c);

// const d = [1, 2, 3, 4, 5].filter(func4);
// console.log(d);

//2.3.2
// const numbers = [1, 3, 5, 4];
// const isAllOdd = numbers.every((e) => e % 2);
// const isSomeOdd = numbers.some((e) => e % 2);

// console.log(isAllOdd, isSomeOdd);

//2.4.2
// const a = [1, 2, 3, 4, 5];
// console.log(a.indexOf(3));
// console.log(a.findIndex((e) => e === 3)); // 보통은 findIndex가 더 빠름

//2.6.1
// const name = "choi";
// const age = 30;
// const job = "SM";

// const data_used_ES6 = { name, age, job };
// console.log(data_used_ES6);

// const a = (b, ...rest) => {
//   console.log(rest);
// };
// a(1, 2, 3);

// const b = [1, 2, 3, 4];
// const a2 = (a, b, c, d) => console.log(a, b, c, d);
// a2(...b); // 분해해서 매개변수로 담음

// const a = [1, 2, 3, 4];
// console.log(Math.max(...a));

//2.6.3 구조분해할당
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a, b);

// const e = [1, 2, 3, 4];
// const d = () => [1, 2, 3, 4];
// const [a, b, c] = e;
// console.log(a, b, c);

// 2.7 promise

// const job_1 = () => {
//   const b = Math.random() * 100;
//   setTimeout(() => {
//     console.log(1);
//   }, b);
// };

// const job_2 = () => {
//   const b = Math.random() * 100;
//   setTimeout(() => {
//     console.log(2);
//   }, b);
// };

// const job_3 = () => {
//   const b = Math.random() * 100;
//   setTimeout(() => {
//     console.log(3);
//   }, b);
// };

// job_1();
// job_2();
// job_3();

// console.log("Hi");

// setTimeout(function () {
//   console.log("async function1 complete");
// }, 5000);

// setTimeout(function () {
//   console.log("async function2 complete");
// }, 5000);

// console.log("kundol");

//Promise를 이용한 예

// const a = (c = "Naver") => {
//   return new Promise((resolve, reject) => {
//     // 비동기 함수로직
//     setTimeout(() => {
//       resolve(`${c}로부터 받은 사랑`);
//     }, 1 * 1000);
//   });
// };

// a()
//   .then((ret) => {
//     console.log(ret);
//     return a(`Kakao`);
//   })
//   .then((ret) => {
//     console.log(ret);
//   });

// const a1 = () => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random() * 100;
//     setTimeout(() => {
//       console.log(1);
//       resolve(1);
//     }, delay);
//   });
// };

// const a2 = () => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random() * 100;
//     setTimeout(() => {
//       console.log(2);
//       resolve(2);
//     }, delay);
//   });
// };

// const a3 = () => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random() * 100;
//     setTimeout(() => {
//       console.log(3);
//       resolve(3);
//     }, delay);
//   });
// };

// a1()
//   .then((ret) => a2())
//   .then((ret) => a3());

//2.7.3 async , await

const a = () => {
  new Promise((resolve, reject) => {
    const time = Math.random * 100;
    setTimeout(() => {
      console.log(1);
      resolve(1);
    }, time);
  });
};

const b = () => {
  new Promise((resolve, reject) => {
    const time = Math.random * 100;
    setTimeout(() => {
      console.log(2);
      resolve(2);
    }, time);
  });
};

const c = () => {
  new Promise((resolve, reject) => {
    const time = Math.random * 100;
    setTimeout(() => {
      console.log(3);
      resolve(3);
    }, time);
  });
};

const main = async () => {
  await a();
  await b();
  await c();
};

main();

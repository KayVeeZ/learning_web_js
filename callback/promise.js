console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No, random number was not supporting you.")
    }
    else {
        setTimeout(() => {
            console.log("Task has been completed successfully.");
            resolve("Kshitij");
        }, 3000);
    }
});

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No, random number was not supporting you 2.")
    }
    else {
        setTimeout(() => {
            console.log("Task has been completed successfully 2.");
            resolve("Kshitij");
        }, 1000);
    }
});
// let p3 = Promise.all([prom2, prom1]);
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let p3 = Promise.allSettled([prom2, prom1]);
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let p3 = Promise.any([prom2, prom1]);
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let p3 = Promise.race([prom1, prom2]);
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let p3 = Promise.resolve([prom1, prom2]);
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

let p3 = Promise.reject([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});
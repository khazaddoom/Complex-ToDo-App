// function sayHello() {
//     return new Promise((resolve, reject) => {
//         reject('Hello World!!!')
//     })
// }

// async function greet() {
//     try {
//         console.log(await sayHello())
//     } catch (error) {
//         console.log(error)
//     }

// }

// greet();


function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 2000);
    });
}


const msg = async function () {
    const msg = await scaryClown();
    console.log(msg);
}

msg();
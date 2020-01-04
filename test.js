function sayHello() {
    return new Promise((resolve, reject) => {
        reject('Hello World!!!')
    })
}

async function greet() {
    try {
        console.log(await sayHello())
    } catch (error) {
        console.log(error)
    }
    
}

greet();
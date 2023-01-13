// const srch = document.getElementById('search')

// srch.onclick = () => {

//     fetch()
// }

const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let x = Math.floor(Math.random() * 2)
        x ? resolve('api connected successfully') :
            reject('error connecting api')
    }, 3000)
})

console.log(
promise1
    .then(success => console.log(success))
    .catch(error => console.log(error)))

//Alternate method below

const connect = async() => {

    try {
    const response = await promise1
    console.log(response)
    } 

    catch(err){

        console.log(err)
    }
}

connect()


// console.log('fetch:', 
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log('json:', data)) ) 

// Alternate for above commented line of code =>

const dogImg = async() => {

    const url = 'https://dog.ceo/api/breeds/image/random'

    const response = await fetch(url)

    const data = await response.json()
    
    console.log(data)


}

dogImg()

//Rule for using async/await
// 1. Must create a functionn
// 2. can only use await for async functions


//ASYNC FUNCTIONS
const sum = async(a,b) => {

    return a+b
}

console.log(sum(5,10).then(value=>console.log(value)))

//NOT POSSIBLE
// const ans = await sum(10,20)
// console.log(ans)
// can use await only inside async function 
// unable to use await outside
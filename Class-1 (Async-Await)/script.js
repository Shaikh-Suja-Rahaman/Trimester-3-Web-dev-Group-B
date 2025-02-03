// async function fetchData(){
//    return new Promise(function(resolve){
//     resolve("Promise Resolved")
  
//    })
// }

// let dataPromise = fetchData()
// dataPromise.then(function(result){
//     console.log(result)
// })


const p1 = new Promise(function(resolve , reject){
      setTimeout(function(){
          resolve('Promise Resolved')
      } , 10000)
})

const p2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve('Promise 2 Resolved')
    } , 12000)
})


function fecthDataPromise(){
    p1.then(function(result){
        console.log(result)
    })
}


async function fetchData(){
  console.log('Scaler')
  let result = await p1 // 10 sec
  console.log("Async Await Result -> " , result)
  console.log('Create Impact')

  let result2 = await p2 // 12 sec
  console.log(result2)
}

function printsHello(){
    console.log('Hello')
}

fetchData()

printsHello()


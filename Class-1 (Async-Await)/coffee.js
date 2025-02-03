function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for Coffee Placed.");
    } else {
      reject("Order can not be Placed.");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise(function (resolve) {
    resolve(`${orderPlaced} and Served.`);
  });
}

//   Resolve it with using Promises

// placeOrder('coffee').then(function(orderPlaced){
//   console.log(orderPlaced)
//   return processOrder(orderPlaced)
// }).then(function(proccessedOrder){
//     console.log(proccessedOrder)
// }).catch(function(orderPlaced){
//    console.log(orderPlaced)
// })

// Async Await
async function serveOrder() {
  try {
    let data1 = await placeOrder("coffee");
    console.log(data1);

    let data2 = await processOrder(data1);
    console.log(data2);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();

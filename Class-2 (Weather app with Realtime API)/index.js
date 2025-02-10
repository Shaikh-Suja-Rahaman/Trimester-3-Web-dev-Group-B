//http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=Paris&aqi=no

const tempratureField = document.querySelector('.temp')
const conditionField = document.querySelector('.weather_condition span')
const timeAndDateField = document.querySelector('.time_location span')
const locationField = document.querySelector('.time_location p ')
const conditionIconField = document.querySelector('.weather_condition img')
const form = document.querySelector('form')
const searchField = document.querySelector('.searchField')
let target = 'Mumbai'


form.addEventListener('submit', searchTarget)


function searchTarget(e){
  e.preventDefault()
  target=  searchField.value
  fetchData(target)
}


async function fetchData(target) {
  let endpoint = `http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`;

  let data = await fetch(endpoint);

  let responseData = await data.json()

  console.log(responseData)

  let name =  responseData.location.name

  let TandD =  responseData.location.localtime

  let tempInC = responseData.current.temp_c

  let condition = responseData.current.condition.text
  let conditionIcon = responseData.current.condition.icon

  console.log(name)
  console.log(TandD)
  console.log(tempInC)
  console.log(condition)
 
  updateFields(name , TandD , tempInC , condition , conditionIcon)



}

function updateFields(location , tandD , temp , condition , conditionIcon){
    tempratureField.innerText = `${temp} C`
    locationField.innerText = location
    timeAndDateField.innerText = tandD
    conditionField.innerText = condition
    conditionIconField.src = conditionIcon
 
 }

fetchData(target);

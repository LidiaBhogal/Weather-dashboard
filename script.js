var today = moment();
  $(".date").text(today.format('L'));

  let root = 'https://api.openweathermap.org/data/2.5/forecast?q='

  let searchB = document.getElementById('search-button');
  let cityName = document.getElementById("search-input");
  let apiKey = "699f44b239ac2b4ed6242e958b370589"
  let wholeUrl = root+ 'london' + '&' + apiKey;

  $('#search-button').on('click', function(event){
      event.preventDefault();
      console.log(cityName.value);
     cityName.val().trim();
     $("#search-button").val('')
    
  
  
  })
  console.log(cityName);

fetch(wholeUrl).then(response => response.json()).then(data => console.log(data));


  // $.ajax({
  //   url: wholeUrl,
  //   method: "GET"
  // }).then(function(response) {
  //   let cityOption = document.getElementById("form-input weather-search")
  //   let forcast = response.forcast;
  //   let cityOptionanswer = $("<p>").text(forcast)
  //   cityOption.append(cityOptionanswer)
  //   console.log(forcast);
  //  })



//   function variables (){
//     let cityName = document.getElementById("search-input");
//     let searchB = document.getElementById('search-button');
//     const clearEl = document.getElementById("clear-history");
//     let nameEl = document.getElementById("London");
//     let currentTempEl = document.getElementById("temperature");
//     let currentHumidityEl = document.getElementById("humidity");
//    let currentWindEl = document.getElementById("wind-speed");
//    let fivedayEl = document.getElementById("fiveday-header");
//    let todayweatherEl = document.getElementById("today-weather");
  


 
  
// // // // beginning of url
// let root = 'http://api.openweathermap.org/geo/1.0/direct?q='


// function getWeather (cityName){
//   // adding all variables together
//   let wholeUrl = root+cityName+ "&limit=5&appid=" + apiKey;
//   $.ajax({
//     url: wholeUrl,
//     method: "GET"
//   }).then(function(response) {
//     todayweatherEl.classlist.remove('done');

//    const today = moment();
//   $("#today forecast").text(today.format("dddd Do MMMM"));
//   let weatherPic = response.data.weather[0].icon;
//   console.log(cityName.value)
//   })
// }

//   }

//   console.log(cityName)









  
// // search button
// let searchB = document.getElementById('search-button');
 

// $('#search-button').on('click', function(event){
//     event.preventDefault();
//     console.log(cityName.value);
   
// console.log(cityName);

// })

// let todaysWeather = document.getElementById('today forecast');
// todaysWeather.classList


//  function getWeather (){
//   let place = $(this).attr('search-input')
//   const queryURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + place + "3M1VZ9NYFdkpcjDQgxUoGBwE0x7FILRI";


//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {

//   }
//  )}



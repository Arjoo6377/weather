const submitBtn= document.getElementById('submitBtn');
const cityName= document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal =cityName.value;
    if(cityVal === "")
    {
        city_name.innerText='please write the name of city before search';
    }
    else
    {
        try
        {
   let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b45a6dba21310e72da3d2295395f61b8`;
   const response =await fetch(url);
   const data= await response.json();
   const arrData=[data];
   temp.innerText = arrData[0].main.temp;
   temp_status.innerText = arrData[0].weather[0].main;
   city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
   updateBackgroundAnimation(arrData[0].weather[0].main);
   
}
   catch{ 
    city_name.innerText='please enter the city name properly';
   }
}}
const updateBackgroundAnimation = (weather) => {
    let backgroundClass = '';
  
    switch (weather) {
      case 'Rain':
        backgroundClass = 'background-rainy';
        break;
      case 'Clouds':
        backgroundClass = 'background-cloudy';
        break;
     
        case 'clear':
          backgroundClass = 'background-sunny';
          break;
      default:
        backgroundClass = '';
        break;
    }
  
    document.body.className = backgroundClass;
  };
  

submitBtn.addEventListener('click',getInfo);
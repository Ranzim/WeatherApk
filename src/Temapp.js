import React,{useState, useEffect} from 'react';
import "./css/style.css";

const Temapp = () => {
  const [city ,setcity] = useState(null);
  const [search ,setsearch] = useState("Kathmandu");
  useEffect( () => {
    const fetchAPI = async () => {
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7bbf9efcd50d4e10f6ae47940b977d71`
      
      const response = await fetch(url);
      // console.log(response);
      const resJson =  await response.json();
      // console.log(resJson);
      setcity(resJson.main);
    }
    fetchAPI();
  },[search])
  return <>
  <div className='main-div'>
      <div className='inputData'>
          <h2>write-down city here</h2>
          <input type="search" className="inputField" onChange={(ram)=>{setsearch(ram.target.value)}}/>
          <hr></hr>

          {!city ?( 
            <p>data not found</p>
          ):(

            <>
             <div  className='info'>
            <h3 className='location'>
            <i className="fas fa-street-view fa-3x"></i>{search}
            </h3>
        
            <h4 className='tem_max'>{city.temp}°cel</h4>
            <h4 className='tem_max'>{city.pressure}N/m­²</h4>
            <h4 className='tem_max'>{city.humidity}kg-1</h4>
          </div>
            </>

          )}
         
       
      
          
      </div>
  </div>
  
  </>
};

export default Temapp;

import { useEffect, useState } from "react";
import './App.css'

export default function Home() {
  const [weatherdata , setWeatherData]=useState();                     
  const [isloading , setIsLoading]=useState (true);
  const getData  = async() =>{               
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=babfe7ea492c47edb0963122261108&q=lahore");
    const result =await  response.json();
    setWeatherData(result);
    setIsLoading(false);
  };
useEffect( ()=>{
  getData();
} , []);
if(isloading){
  return(
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    </div>
  )
}
  
  return (
    <div className="container-fluid home-page ">
      <div className="row g-3 align-items-stretch ">
        {/* ============ LEFT COLUMN ============ */}
        <div className="col-12 col-md-4 col-lg-3 d-flex left">
          <div className="weather-card w-100">
            <div className="search-wrap position-relative mb-3">
              <i className="bi bi-search" />
              <input
                type="text"
                className="form-control search-pill w-100 mt-2"
                placeholder="Search city..."
              />
            </div>
            <div className="weather-icon mt-4">
              <img className="img1" src="\assests\images\page1\1.png" alt="" />
            </div>
            <div className="temp-display mt-2">{weatherdata.current.temp_c}°C</div>
            <div className="location-row d-flex justify-content-between mt-3">
              <span>{weatherdata.location.name}</span>
              <span className="day">Monday</span>
            </div>
            <ul className="condition-list mt-3">
              <li><i className="bi bi-cloud-drizzle" />{weatherdata.current.condition.text}</li>
              <li><i className="bi bi-thermometer-low" /> Min Temperature - 28°C</li>
              <li><i className="bi bi-thermometer-high" /> Max Temperature - 31°C</li>
            </ul>
            <div className="row g-2 mt-auto">
              <div className="col-6">
                <div className="stat-box">
                  <i className="bi bi-moisture" />
                  <div>
                    <div className="stat-value">83%</div>
                    <div className="stat-label">Humidity</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-box">
                  <i className="bi bi-wind" />
                  <div>
                    <div className="stat-value">6km/h</div>
                    <div className="stat-label">Wind Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          

        {/* ============ MIDDLE COLUMN ============ */}
        <div className="col-12 col-md-8 col-lg-6 d-flex">
          <div className="weather-card w-100">
            <div className="nav-tabs-custom mb-4">
              <button type="button" className="tab-btn">Today</button>
              <button type="button" className="tab-btn active">Week</button>
            </div>

            <div className="row g-2 mb-4 week-forecast">
              <div className="col">
                <div className="day-card">
                  <span className="day-name">Sun</span>
                  <img src="\assests\images\page2\1.png" alt="" className="day-icon" />
                  <span className="day-temp">32°</span>
                </div>
              </div>
              <div className="col">
                <div className="day-card">
                  <span className="day-name">Mon</span>
                  <img src="\assests\images\page2\2.png" alt="" className="day-icon" />
                  <span className="day-temp">31°</span>
                </div>
              </div>
              <div className="col">
                <div className="day-card">
                  <span className="day-name">Tue</span>
                  <img src="\assests\images\page2\3.png" alt="" className="day-icon" />
                  <span className="day-temp">30°</span>
                </div>
              </div>
              <div className="col">
                <div className="day-card">
                  <span className="day-name">Wed</span>
                  <img src="\assests\images\page2\4.png" alt="" className="day-icon" />
                  <span className="day-temp">29°</span>
                </div>
              </div>
              <div className="col">
                <div className="day-card">
                  <span className="day-name">Thu</span>
                  <img src="\assests\images\page2\5.png" alt="" className="day-icon" />
                  <span className="day-temp">30°</span>
                </div>
              </div>
              <div className="col">
                <div className="day-card">
                  <span className="day-name">Fri</span>
                  <img src="\assests\images\page2\6.png" alt="" className="day-icon" />
                  <span className="day-temp">31°</span>
                </div>
              </div>
              <div className="col">
                <div className="day-card">
                  <span className="day-name">Sat</span>
                  <img src="\assests\images\page2\7.png" alt="" className="day-icon" />
                  <span className="day-temp">32°</span>
                </div>
              </div>
            </div>

            <h5 className="section-title mt-3">Today's Overview</h5>

            <div className="row g-2 mb-2">
              <div className="col-4">
                <div className="metric-card">
                  <span className="metric-label">Air Quality Index</span>
                  <div className="metric-value">53</div>
                  <div className="metric-status-row">
                    <span className="metric-status good">Good</span>
                    <img src="\assests\images\page2\8.png" alt="" className="metric-icon" />
                  </div>
                </div>
              </div>

              <div className="col-4 ">
                <div className="metric-card">
                  <span className="metric-label">UV Index</span>
                  <div className="metric-value">3</div>
                  <div className="metric-status-row">
                    <span className="metric-status moderate">Moderate</span>
                    <img src="\assests\images\page2\9.png" alt="" className="metric-icon" />
                  </div>
                </div>
              </div>

              <div className="col-4 ">
                <div className="metric-card">
                  <span className="metric-label">Pressure (hpa)</span>
                  <div className="metric-value">1006</div>
                  <div className="metric-status-row">
                    <span className="metric-status">Normal</span>
                    <img src="\assests\images\page2\10.png" alt="" className="metric-icon" />
                  </div>
                </div>
              </div>


            </div>

            <div className="row g-2 mt-3">
              <div className="col-8">
                <div className="metric-card chart-card">
                  <span className="metric-label">Precipitation</span>
                  <div className="chart-area">
                    <svg viewBox="0 0 300 80" className="precip-chart">
                      <line x1={0} y1={20} x2={300} y2={20} stroke="#3a3a3a" strokeWidth={1} />
                      <line x1={0} y1={40} x2={300} y2={40} stroke="#3a3a3a" strokeWidth={1} />
                      <line x1={0} y1={60} x2={300} y2={60} stroke="#3a3a3a" strokeWidth={1} />
                      <polyline
                        points="0,55 40,35 80,48 120,22 160,40 200,28 240,38 280,30 300,42"
                        fill="none"
                        stroke="#9a9a9a"
                        strokeWidth={2}
                      />
                    </svg>
                    <div className="chart-labels">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="metric-card">
                  <span className="metric-label">Sunrise & Sunset</span>
                  <div className="sun-item">
                    <i className="bi bi-sunrise text-warning" />
                    <div>
                      <div className="sun-label">Sunrise</div>
                      <div className="sun-time">7:06 AM</div>
                    </div>
                  </div>
                  <div className="sun-item mt-2">
                    <i className="bi bi-sunset text-warning" />
                    <div>
                      <div className="sun-label">Sunset</div>
                      <div className="sun-time">7:03 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
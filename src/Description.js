import React from "react";

const Description = ({ city, setCity, searchLoc, data, loading }) => {
  return (
    <div className="mask">
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="search city..."
            onKeyPress={searchLoc}
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
      </div>

      <div className="container">
        <div className="a">{loading && <h2>Loading...</h2>}</div>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            {data.main ? <h1>{data.main.temp.toFixed()} °F</h1> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()} °F </p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity} %</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()} mph</p> : null}
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

import React from "react";
import "./Weather.css";

export const Weather = ({
    name,
    weather,
    temp,
    feels_like,
    wind_speed,
    wind_degree,
    country
}) => {
    const iconUrl = "http://openweathermap.org/img/wn";
    return (
        <div className={"weather__container"}>
            <h2>
                {name}, {country}
            </h2>
            <h2>
                {temp.toFixed(0)} C <sup>o</sup>
            </h2>
            <p>Feels like: {feels_like.toFixed(0)} C <sup>o</sup></p>
            {weather.map(({description, main, icon}, i) => (
                <p key={i}>
                    <img src={`${iconUrl}/${icon}@2x.png`} alt="" />
                    <br />
                    <b>{main}</b>
                    <br />
                    {description}
                </p>
            ))}
            <p>
                {wind_degree} {wind_speed}
            </p>
        </div>
    );
};
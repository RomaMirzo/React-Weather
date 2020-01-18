import React from 'react';
import {getLocation} from "./utils";
import {Weather} from './components/Weather';
import {SearchForm} from './components/SearchForm';
import './App.css';

const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "840f06a7c96cfaf547124964bde3a17b";



class App extends React.Component {
  state = {
    lon: '',
    lat: '',
    query: '',
    data: undefined
  };

  async componentDidMount() {
    const {coords} = await getLocation();
    console.log(coords);
    this.setState((state) => ({...state, lat: coords.latitude.toFixed(2), lon: coords.longitude.toFixed(2)}));
    this.fetchWeather();
  };
fetchWeather = async () => {
  const {lat, lon} = this.state;
  const response = await fetch(`${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  this.setCurrentWeather(data)
};

setCurrentWeather = data => {
  const {
    main: {temp, feels_like},
    wind: {speed: wind_speed, deg: wind_degree},
    sys: {country, sunrise, sunset},
    name,
    weather
  } = data;
  this.setState(state => {
    return {
      ...state,
      data: {
        temp,
        feels_like,
        wind_speed,
        wind_degree,
        country,
        sunrise,
        sunset,
        name,
        weather
      }
    };
  });
};

  search = async value => {
    try {
      const response = await fetch(
        `${API_URL}/weather?appid=${API_KEY}&q=${value}&units=metric`
      );
      const data = await response.json();
      this.setCurrentWeather(data);
    } catch(e) {
      throw e;
    };
  };

  renderContent() {
    return this.state.data ? 
    <>
    <SearchForm onSubmit={this.search} />
    <Weather {...this.state.data}/>
    </> : ("Loading...")
  };

  render() {
    return <div className="app__container">
      <div className="app__content">
        {this.renderContent()}
      </div>
    </div>
  };
}

export default App;

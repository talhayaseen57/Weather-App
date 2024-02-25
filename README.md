# Weather Application

This is a simple weather application built with React that allows users to check the current weather conditions of any city. The application displays information such as temperature, humidity, and wind speed.

![Weather Application Demo](/src/Componenets/Assets/demo.gif)


## Features

- Displays current weather conditions including temperature, humidity, and wind speed.
- Allows users to search for weather information of any city.
- Uses icons to represent weather conditions.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

```
git clone https://github.com/talhayaseen57/weather-app.git
```

2. Navigate into the project directory:

```
cd weather-app
```

3. Install dependencies using npm or yarn:

```
npm install
```
or
```
yarn install
```

4. Start the development server:

```
npm start
```
or
```
yarn start
```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- React
- Open Weather API

## API Usage

This application fetches weather data from the [Open Weather API](https://openweathermap.org). You will need to sign up for an API key and replace `open_weather_api_key` in the [WeatherApp.jsx](/src/Componenets/WeatherApp/WeatherApp.jsx#L15) file with your actual API key.

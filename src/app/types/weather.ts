export class Weather {

    weatherString: string;

    constructor(private weatherData: WeatherData) {
        this.setWeatherString();
    }

    setWeatherString() {
        const allConditions = (this.weatherData.weather.map((w) => w.description)).join(', ');
        this.weatherString = `${ this.weatherData.name } | ${ this.KToF(this.weatherData.main.temp) }°F | ${ allConditions }`;
    }

    getWeatherString(): string {
        return this.weatherString;
    }

    // Kelvin to Fahrenheit 
    KToF(k: number) {
        return Math.round(((k - 273.15) *1.8) + 32);
    }

}

interface WeatherData {
    coord: {lat: number, long: number},
    weather: WeatherObject[],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {speed: number},
    // rain: {[1h]: number}, <--- not sure how to name this property...
    clouds: {all: number},
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number, 
        sunset: number
    },
    timezone: number,
    id: number, 
    name: string,
    cod: number
}

interface WeatherObject {
    id: number,
    main: string,
    description: string,
    icon: string
}
import { computed, defineComponent, ref } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'

import WeatherTitle from './WeatherTitle.js'
import WeatherAlert from './WeatherAlert.js'
import WeatherCard from './WeatherCard.js'
import WeatherConditions from './WeatherConditions.js'
import WeatherDetails from './WeatherDetails.js'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherTitle,
    WeatherAlert,
    WeatherCard,
    WeatherConditions,
    WeatherDetails,
  },

  setup() {
    const weatherData = ref(getWeatherData())

    const weatherAlert = computed(() => {
      return weatherData.value.find(i => i.alert !== null)
    })

    const formatTemp = kelvin => {
      return parseFloat(kelvin - 273.15).toFixed(1)
    }

    const hpa = hpa => {
      return Math.round(hpa * 0.75)
    }

    return {
      weatherData,
      weatherAlert,
      icons: WeatherConditionIcons,
      formatTemp,
      hpa,
    }
  },

  template: `
    <div>
       <WeatherTitle />

      <ul  class="weather-list unstyled-list">
        <li v-for="weather in weatherData" class="weather-card " :class="{ 'weather-card--night': weather.current.dt < weather.current.sunrise }">

          <WeatherAlert v-if="weather === weatherAlert" :alertName="weatherAlert.alert.sender_name" :alertDesc="weatherAlert.alert.description"/>

          <WeatherCard :cardName="weather.geographic_name" :cardTime="weather.current.dt"/>

          <WeatherConditions :weatherDesc="weather.current.weather.description" :weatherTemp="formatTemp(weather.current.temp)" :weatherIcon="icons[weather.current.weather.id]"/>

          <WeatherDetails
            :pressure="hpa(weather.current.pressure)"
            :humidity="weather.current.humidity"
            :clouds="weather.current.clouds"
            :windSpeed="weather.current.wind_speed"
          />
        </li>
      </ul>
    </div>
  `,
})

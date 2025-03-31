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
      return (kelvin - 273.15).toFixed(1)
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
        <li v-if="weatherAlert" class="weather-card weather-card--night">

          <WeatherAlert :alertName="weatherAlert.alert.sender_name" :alertDesc="weatherAlert.alert.description"/>

          <WeatherCard :cardName="weatherAlert.geographic_name" :cardTime="weatherAlert.current.dt"/>

          <WeatherConditions :weatherTemp="formatTemp(weatherAlert.current.temp)" :weatherIcon="icons[weatherAlert.current.weather.id]"/>

          <WeatherDetails
            :pressure="hpa(weatherAlert.current.pressure)"
            :humidity="weatherAlert.current.humidity"
            :clouds="weatherAlert.current.clouds"
            :windSpeed="weatherAlert.current.wind_speed"
          />
        </li>
      </ul>
    </div>
  `,
})

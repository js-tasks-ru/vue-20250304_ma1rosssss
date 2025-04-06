import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherConditions',

  props: {
    weatherTemp: {
      type: Number,
      required: true,
    },

    weatherIcon: {
      type: String,
      required: true,
    },

    weatherDesc: {
      type: String,
      required: true,
    },
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="weatherDesc">{{ weatherIcon }}</div>
      <div class="weather-conditions__temp">{{ weatherTemp }} °C</div>
    </div>
  `,
})

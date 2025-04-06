import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherAlert',

  props: {
    alertDesc: {
      type: String,
      required: true,
    },

    alertName: {
      type: String,
      required: true,
    },
  },

  template: `
   <div class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">{{ alertName }}: {{ alertDesc }}</span>
  </div>
  `,
})

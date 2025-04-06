import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCard',

  props: {
    cardName: {
      type: String,
      required: true,
    },

    cardTime: {
      type: String,
      required: true,
    },
  },

  template: `
    <div>
      <h2 class="weather-card__name">
        {{ cardName }}
      </h2>
      <div class="weather-card__time">
        {{ cardTime }}
      </div>
    </div>
  `,
})

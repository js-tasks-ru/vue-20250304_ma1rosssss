import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherTitle',

  props: {
    title: {
      type: String,
      required: true,
    },
  },

  template: `
    <h1 class="title">{{ title }}</h1>
  `,
})

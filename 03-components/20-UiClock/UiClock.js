import { defineComponent, onMounted, ref, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  props: {
    timer: {
      type: String,
      default: 'medium',
    },
  },

  setup(props) {
    const currentTime = ref('')

    let timer = null

    const updateTime = () => {
      currentTime.value = new Date().toLocaleTimeString('en-US', { timeStyle: props.timer })
    }

    onMounted(() => {
      updateTime()

      timer = setInterval(updateTime, 1000)
    })

    onUnmounted(() => {
      clearInterval(timer)
    })

    return {
      currentTime,
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})

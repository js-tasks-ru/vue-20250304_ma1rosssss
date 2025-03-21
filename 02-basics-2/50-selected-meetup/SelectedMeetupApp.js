import { defineComponent, ref, onMounted } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetups = ref(null)
    const selectedId = ref(1)

    const fetchMeetup = async id => {
      try {
        meetups.value = await getMeetup(id)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => fetchMeetup(selectedId.value))

    const prev = () => {
      selectedId.value--
      fetchMeetup(selectedId.value)
    }

    const next = () => {
      selectedId.value++
      fetchMeetup(selectedId.value)
    }

    return {
      fetchMeetup,
      selectedId,
      meetups,
      next,
      prev,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button @click="prev" :disabled="selectedId === 1" class="button button--secondary" type="button" disabled>Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div v-for="i in 5"  class="radio-group__button">
            <input
              :id="'meetup-id-' + i"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="i"
              v-model="selectedId"
              @change="fetchMeetup(i)"
            />
            <label :for="'meetup-id-' + i" class="radio-group__label">{{ i }}</label>
          </div>

        </div>

        <button @click="next" :disabled="selectedId === 5" class="button button--secondary" type="button">Следующий</button>
      </div>

      <div v-if="meetups"  class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title"> {{ meetups.title }} </h1>
        </div>
      </div>

    </div>
  `,
})

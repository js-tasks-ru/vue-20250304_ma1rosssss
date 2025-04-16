import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['remove'],

  setup(props, { emit }) {
    const handleRemove = () => {
      emit('remove')
    }

    return {
      handleRemove,
    }
  },

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click="handleRemove">❌</button>
    </li>
  `,
})

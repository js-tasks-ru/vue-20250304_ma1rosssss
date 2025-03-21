import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const num1 = ref(0)
    const num2 = ref(0)
    const calculation = ref('num')

    const result = computed(() => {
      if (calculation.value === 'sum') {
        return num1.value + num2.value
      } else if (calculation.value === 'subtract') {
        return num1.value - num2.value
      } else if (calculation.value === 'multiply') {
        return num1.value * num2.value
      } else if (calculation.value === 'divide') {
        return num1.value / num2.value
      } else {
        return 0
      }
    })

    return { num1, result, num2, calculation }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="num1"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="calculation"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="calculation"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="calculation"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="calculation"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="num2"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})

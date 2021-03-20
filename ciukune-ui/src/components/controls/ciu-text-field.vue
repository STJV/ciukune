<template lang="pug">
div(class="ciu-text-field")
  input(
    placeholder=" "
    :type="password ? 'password' : 'text'"
    :value="modelValue"
    @input="valueChanged($event.target.value)"
  )
  div(class='ciu-text-field-placeholder')
    div {{placeholder}}

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
      'placeholder': String,
      'modelValue': String,
      'password': Boolean
    },
    emits: [
        'update:modelValue',
        'test'
    ],
    setup(props, {emit}) {
      let valueChanged = (newValue: string) => emit('update:modelValue', newValue)
      return {
          valueChanged
      }
    },
})
</script>

<style>
.ciu-text-field {
  display: grid;
  padding-top: calc(var(--ciu-font-size) * 0.8);
}

.ciu-text-field > input {
  background: transparent;
  border-bottom: 1px var(--ciu-color) solid;
  border-left: none;
  border-right: none;
  border-top: none;
  font: var(--ciu-font);
  grid-area: 1 / 1;
  transition: border-bottom 0.2s;
}

.ciu-text-field > input:focus {
  outline: none;
  border-bottom: 1px var(--ciu-active-color) solid;
}

.ciu-text-field-placeholder {
  color: var(--ciu-muted-color);
  display: flex;
  font-size: 90%;
  grid-area: 1 / 1;
  transition-duration: 0.2s;
  transition-property: transform font-size;
  z-index: -1;
}

.ciu-text-field-placeholder > div {
  align-self: center;
}

.ciu-text-field > input:focus + .ciu-text-field-placeholder {
  font-size: 80%;
  transform: translate(0px, calc(var(--ciu-font-size) * -1.1));
}

.ciu-text-field > input:not(:placeholder-shown) + .ciu-text-field-placeholder {
  font-size: 80%;
  transform: translate(0px, calc(var(--ciu-font-size) * -1.1));
}
</style>

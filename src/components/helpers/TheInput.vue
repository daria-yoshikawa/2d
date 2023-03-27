<template>
  <input
    class="input"
    @input="onInput"
    :value="modelValue"
    :placeholder="String(props.placeholder)"
  />
</template>

<script setup lang="ts">
export interface Props {
  placeholder?: string | number;
  modelValue?: string | number;
  notEditable?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const onInput = (e?: any) => {
  emit("update:modelValue", e.target.value);
};
</script>
<style scoped>
input {
  display: block;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid lightblue;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
}
input:focus {
  border: 2px solid mediumturquoise;
}
</style>

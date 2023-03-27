<template>
  <div class="keyboard">
    <TheButton
      class="keyboard-button"
      v-for="(key, id) in keys"
      :key="id"
      @click="emits('keyDown', key)"
    >
      {{ key }}
    </TheButton>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { TheButton } from "./helpers";

const emits = defineEmits(["keyDown"]);
const keys = ref<string[]>([]);

for (let i: number = 0; i < 10; i++) {
  keys.value.push(String(i));
}
keys.value.push(...["x", "y", "=", "+", "-", "*", "/"]);
</script>
<style scoped>
.keyboard {
  margin: auto;
  width: 490px;
  display: flex;
  flex-wrap: wrap;
}
.keyboard-button {
  margin-left: 5px;
  margin-bottom: 5px;
}
</style>

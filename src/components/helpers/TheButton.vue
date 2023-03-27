<template>
  <div>
    <button :class="props.variant">
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  variant: "primary" | "secondary";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>

<style scoped>
.primary {
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: lightblue;
  color: black;
  cursor: pointer;
  font-size: 1em;
  padding: 10px 15px 10px 15px;
}
.primary:hover {
  background-color: mediumturquoise;
}
</style>

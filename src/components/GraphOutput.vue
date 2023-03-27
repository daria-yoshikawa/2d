<template>
  <canvas ref="canvas" :width="props.width" :height="props.height"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

export interface Props {
  height: number;
  width: number;
}

const props = withDefaults(defineProps<Props>(), {
  height: 500,
  width: 500,
});

const canvas = ref<HTMLCanvasElement>();
const ctx = ref<CanvasRenderingContext2D | null>();

onMounted(() => {
  if (!canvas.value) return;
  ctx.value = canvas.value.getContext("2d");
});

defineExpose({
  ctx,
});
</script>
<style scoped>
canvas {
  border: 1px solid purple;
}
</style>

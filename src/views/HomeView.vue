<template>
  <div class="main">
    <GraphOutput ref="graph" :height="height" :width="width" />

    <div class="flex formule">
      y=
      <TheInput
        class="formule-input"
        v-model="func"
        placeholder="Введите функцию"
      />
      <TheButton @click="showFunc">Показать</TheButton>
    </div>

    <KeyBoard @key-down="onInput" />
  </div>
</template>
<script setup lang="ts">
import { TheButton, TheInput } from "@/components/helpers";
import { GraphOutput, KeyBoard } from "@/components";
import { onMounted, ref } from "vue";
import { drawAxios, drawGraph, drawLayout } from "@/module/draw";
import { calculateFunc } from "@/module/calculate";

const height = 500;
const width = 500;
onMounted(() => {
  drawLayout(10, height, width, graph.value.ctx);
  drawAxios(10, height, width, graph.value.ctx);
});

const graph = ref();
const func = ref("");

const onInput = (symbol: string) => {
  func.value = func.value + symbol;
};

const showFunc = () => {
  if (!func.value) return;
  graph.value.ctx.clearRect(0, 0, width, height);
  drawLayout(10, height, width, graph.value.ctx);
  drawAxios(10, height, width, graph.value.ctx);
  drawGraph(calculateFunc(func.value, height, -5, 5), graph.value.ctx);
};
</script>
<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formule {
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
}
.formule-input {
  margin-right: 30px;
  width: 50%;
}
</style>

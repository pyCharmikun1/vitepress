<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div class="demo-component">
    <p>当前计数: {{ count }}</p>
    <button @click="increment">点击增加</button>
  </div>
</template>

<script setup lang="ts">
import type { Column } from '../types'

defineProps<{
  column: Column
}>()
</script>

<template>
  <th
    class="text-left"
  >
    {{ column.name }}
  </th>
</template>

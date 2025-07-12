<script setup lang="ts">
import type { Column } from '../types'
import { storeToRefs } from 'pinia'
import { useDataTableStore } from '@/stores/dataTable'

defineProps<{
  column: Column
}>()

const store = useDataTableStore()
const { filter } = storeToRefs(store)
</script>

<template>
  <input
    v-if="column.type === 'string'"
    type="text"
    v-model="filter[column.id]"
    class="border border-gray-200"
    placeholder="Search..."
  >

  <div
    v-if="column.type === 'number'"
    class="flex"
  >
    <input
      type="number"
      class="border border-gray-200"
      placeholder="Min"
      v-model="filter[column.id].min"
    >

    <input
      type="number"
      class="border border-gray-200"
      placeholder="Max"
      v-model="filter[column.id].max"
    >
  </div>
</template>

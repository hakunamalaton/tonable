<script setup lang="ts">
import type { Column } from '../types'
import DataTableHeaderFilter from './DataTableHeaderFilter.vue'
import { useDataTableStore } from '@/stores/dataTable'

const props = defineProps<{
  column: Column
}>()

const { sort } = useDataTableStore()

function handleSort () {
  if (sort.columnId === props.column.id) {
    sort.direction = sort.direction === 'asc' ? 'desc' : 'asc'
  } else {
    sort.columnId = props.column.id
    sort.direction = 'asc'
  }
}
</script>

<template>
  <th
    class="text-left cursor-pointer pr-3 pb-3"
  >
    <div
      class="flex"
      @click="handleSort"
    >
      {{ column.name }}
      <span v-if="sort.columnId === column.id && sort.direction">
        {{ sort.direction === 'asc' ? '^' : 'V' }}
      </span>
    </div>
    <DataTableHeaderFilter
      :column="column"
    />
  </th>
</template>

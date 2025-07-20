<script setup lang="ts">
import type { Column, Filter } from '../types'
import DataTableHeaderFilter from './DataTableHeaderFilter.vue'
import type { Sort } from '../types'

const props = defineProps<{
  column: Column
}>()

const sort = defineModel<Sort>('sort', { required: true })
const filter = defineModel<Filter>('filter', { required: true })

function handleSort () {
  if (sort.value.columnId === props.column.id) {
    sort.value.direction = sort.value.direction === 'asc' ? 'desc' : 'asc'
  } else {
    sort.value.columnId = props.column.id
    sort.value.direction = 'asc'
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
      v-model:filter="filter"
    />
  </th>
</template>

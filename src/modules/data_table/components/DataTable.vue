<script setup lang="ts">
import { computed } from 'vue'
import type { Column, Row } from '../types'
import DataTableHeader from './DataTableHeader.vue'
import DataTablePagination from './DataTablePagination.vue'

const props = defineProps<{
  columns: Column[]
  rows: Row[]
}>()

const pageSize = defineModel<number>('pageSize', { default: 5 })
const page = defineModel<number>('page', { default: 1 })

const paginatedRows = computed(() => {
  return props.rows.slice((page.value - 1) * pageSize.value, page.value * pageSize.value)
})
</script>

<template>
  <table>
    <thead>
      <tr class="border-b border-gray-200">
        <th class="text-left">Id</th>
        <DataTableHeader
          v-for="column in columns"
          :key="column.id"
          :column="column"
        />
      </tr>
    </thead>

    <tbody>
      <tr
        class="border-b border-gray-200"
        v-for="(row, index) in paginatedRows"
        :key="index"
      >
        <td class="w-10">{{ row.id }}</td>
        <td
          v-for="(cell, index) in row.data"
          :key="index"
          class="pr-4 truncate"
        >
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>

  <hr class="my-2" />

  <DataTablePagination
    :rows="rows"
    v-model:page-size="pageSize"
    v-model:page="page"
  />
</template>

<style scoped lang="postcss">
table {
  overflow: auto;
  width: 100%;
  display: block;
}

tbody {
  white-space: nowrap;
}
</style>

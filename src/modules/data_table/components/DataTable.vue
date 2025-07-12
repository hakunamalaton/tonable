<script setup lang="ts">
import { computed } from 'vue'
import type { Column, Row, Sort } from '../types'
import DataTableHeader from './DataTableHeader.vue'
import DataTablePagination from './DataTablePagination.vue'
import { sortRow } from '../utils/sortRow'
import { filterRow } from '../utils/filterRow'

const props = defineProps<{
  columns: Column[]
  rows: Row[]
  pageSize: number
  page: number
  sort: Sort
  filter: { [key: number]: { min: string, max: string } | string }
}>()


const filteredRows = computed(() => {
  const sortedRows = sortRow(props.rows, props.columns, props.sort)

  const filteredRows = filterRow(sortedRows, props.columns, props.filter)

  return filteredRows
})

const paginatedRows = computed(() => {
  return filteredRows.value.slice((props.page - 1) * props.pageSize, props.page * props.pageSize)
})
</script>

<template>
  <table>
    <thead>
      <tr class="border-b border-gray-200">
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
    :rows="filteredRows"
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

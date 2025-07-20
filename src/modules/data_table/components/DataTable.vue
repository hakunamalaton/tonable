<script setup lang="ts">
import { computed } from 'vue'
import type { Column, Row, Sort, Filter } from '../types'
import DataTableHeader from './DataTableHeader.vue'
import DataTablePagination from './DataTablePagination.vue'
import { sortRow } from '../utils/sortRow'
import { filterRow } from '../utils/filterRow'

const props = defineProps<{
  columns: Column[]
  rows: Row[]
}>()

const sort = defineModel<Sort>('sort', { required: true })
const filter = defineModel<Filter>('filter', { required: true })
const pageSize = defineModel<number>('pageSize', { required: true })
const page = defineModel<number>('page', { required: true })

const filteredRows = computed(() => {
  const sortedRows = sortRow(props.rows, props.columns, sort.value)

  const filteredRows = filterRow(sortedRows, props.columns, filter.value)

  return filteredRows
})

const paginatedRows = computed(() => {
  return filteredRows.value.slice((page.value - 1) * pageSize.value, page.value * pageSize.value)
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
          v-model:sort="sort"
          v-model:filter="filter"
        />
      </tr>
    </thead>

    <tbody>
      <template v-if="paginatedRows.length === 0">
        <tr>
          <td
            colspan="100%"
            class="text-center"
          >
            No data
          </td>
        </tr>
      </template>
      <template v-else>
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
      </template>
    </tbody>
  </table>

  <hr class="my-2" />

  <DataTablePagination
    :rows="filteredRows"
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

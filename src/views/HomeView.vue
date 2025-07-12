<script setup lang="ts">
import DataTable from '@/modules/data_table/components/DataTable.vue'
import { storeToRefs } from 'pinia'
import { useDataTableStore } from '@/stores/dataTable'

const store = useDataTableStore()
const {
  columns,
  rows,
  pageSize,
  page,
  sort,
  filter,
} = storeToRefs(store)
</script>

<template>
  <DataTable
    :columns="columns"
    :rows="rows"
    :page-size="pageSize"
    :page="page"
    :sort="sort"
    :filter="filter"
  />
</template>

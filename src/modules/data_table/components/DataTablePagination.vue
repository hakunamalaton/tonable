<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDataTableStore } from '@/stores/dataTable'
import type { Row } from '../types'
import { computed } from 'vue'

const props = defineProps<{
  rows: Row[]
}>()

const pageSizeOptions = [5, 10, 20]
const store = useDataTableStore()
const {
  pageSize,
  page,
} = storeToRefs(store)

const totalPages = computed(() => {
  return Math.ceil(props.rows.length / pageSize.value)
})
</script>

<template>
  <div class="flex items-center gap-2">
    <select
      id="page-size"
      v-model="pageSize"
      class="border border-gray-300 rounded-md p-1 bg-gray-100"
    >
      <option
        v-for="option in pageSizeOptions"
        :key="option"
        :value="option"
      >
        Show {{ option }}
      </option>
    </select>

    <div>
      <button
        class="border border-gray-300 rounded-md p-1 bg-gray-100 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="page === 1"
        @click="page--"
      >
        Previous
      </button>
    </div>

    <span>
      Page {{ page }} of {{ totalPages }}
    </span>

    <div>
      <button
        class="border border-gray-300 rounded-md p-1 bg-gray-100 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="page === totalPages"
        @click="page++"
      >
        Next
      </button>
    </div>
  </div>
</template>
import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Column, Row, Sort } from '@/modules/data_table/types'

export const useDataTableStore = defineStore('dataTable', () => {
  const pageSize = ref(5)
  const page = ref(1)
  const sort = ref<Sort>({ columnId: 0, direction: null })

  const columns = ref<Column[]>([
    { id: 1, name: 'Name', type: 'string' },
    { id: 2, name: 'Age', type: 'number' },
    { id: 3, name: 'Gender', type: 'string' },
  ])

  const filter = ref<{ [key: number]: { min: string, max: string } | string }>(
    columns.value.reduce((acc, column) => {
      acc[column.id] = column.type === 'string' ? '' : { min: '', max: '' }
      return acc
    }, {} as { [key: number]: { min: string, max: string } | string }),
  )

  const rows = ref<Row[]>([
    { id: 1, data: ['John', 25, 'Male'] },
    { id: 2, data: ['Jane', 30, 'Female'] },
    { id: 3, data: ['Jim', 35, 'Male'] },
    { id: 4, data: ['Sarah', 28, 'Female'] },
    { id: 5, data: ['Michael', 42, 'Male'] },
    { id: 6, data: ['Emily', 31, 'Female'] },
    { id: 7, data: ['David', 39, 'Male'] },
    { id: 8, data: ['Lisa', 27, 'Female'] },
    { id: 9, data: ['Robert', 45, 'Male'] },
    { id: 10, data: ['Ashley', 33, 'Female'] },
    { id: 11, data: ['Christopher', 29, 'Male'] },
    { id: 12, data: ['Amanda', 36, 'Female'] },
    { id: 13, data: ['Matthew', 41, 'Male'] },
    { id: 14, data: ['Jessica', 26, 'Female'] },
    { id: 15, data: ['Andrew', 38, 'Male'] },
    { id: 16, data: ['Stephanie', 32, 'Female'] },
    { id: 17, data: ['Joshua', 24, 'Male'] },
    { id: 18, data: ['Michelle', 37, 'Female'] },
    { id: 19, data: ['Daniel', 43, 'Male'] },
    { id: 20, data: ['Nicole', 29, 'Female'] },
    { id: 21, data: ['Ryan', 34, 'Male'] },
    { id: 22, data: ['Elizabeth', 40, 'Female'] },
    { id: 23, data: ['Kevin', 31, 'Male'] },
    { id: 24, data: ['Rachel', 28, 'Female'] },
    { id: 25, data: ['Brandon', 35, 'Male'] },
    { id: 26, data: ['Lauren', 33, 'Female'] },
    { id: 27, data: ['Jason', 42, 'Male'] },
    { id: 28, data: ['Megan', 27, 'Female'] },
    { id: 29, data: ['Tyler', 30, 'Male'] },
    { id: 30, data: ['Samantha', 36, 'Female'] },
    { id: 31, data: ['Nathan', 39, 'Male'] },
    { id: 32, data: ['Heather', 32, 'Female'] },
    { id: 33, data: ['Jonathan', 26, 'Male'] },
    { id: 34, data: ['Rebecca', 38, 'Female'] },
    { id: 35, data: ['Aaron', 41, 'Male'] },
    { id: 36, data: ['Jennifer', 29, 'Female'] },
    { id: 37, data: ['Zachary', 34, 'Male'] },
    { id: 38, data: ['Melissa', 31, 'Female'] },
    { id: 39, data: ['Adam', 37, 'Male'] },
    { id: 40, data: ['Amy', 28, 'Female'] },
    { id: 41, data: ['Thomas', 44, 'Male'] },
    { id: 42, data: ['Kimberly', 33, 'Female'] },
    { id: 43, data: ['Jordan', 25, 'Male'] },
    { id: 44, data: ['Angela', 39, 'Female'] },
    { id: 45, data: ['James', 46, 'Male'] },
    { id: 46, data: ['Linda', 35, 'Female'] },
    { id: 47, data: ['Benjamin', 30, 'Male'] },
    { id: 48, data: ['Patricia', 42, 'Female'] },
    { id: 49, data: ['William', 38, 'Male'] },
    { id: 50, data: ['Barbara', 45, 'Female'] },
  ])

  watch(pageSize, () => {
    page.value = 1
  })

  watch(filter, () => {
    page.value = 1
  }, { deep: true })

  return { pageSize, page, sort, filter, columns, rows }
})

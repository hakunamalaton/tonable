import type { Column, Row, Sort } from '../types'

export function sortRow (rows: Row[], columns: Column[], sort: Sort) {
  const sortedRows = [...rows]
  const sortColumnIndex = columns.findIndex(column => column.id === sort.columnId)
  if (sortColumnIndex > -1 && sort.direction) {
    sortedRows.sort((a, b) => {
      if (sort.direction === 'asc') {
        return a.data[sortColumnIndex] > b.data[sortColumnIndex] ? 1 : -1
      }
      return a.data[sortColumnIndex] < b.data[sortColumnIndex] ? 1 : -1
    })
  }

  return sortedRows
}
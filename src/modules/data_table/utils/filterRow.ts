import type { Column, Filter, Row } from '../types'

export function filterRow (rows: Row[], columns: Column[], filter: Filter) {
  let filteredRows = [...rows]

  Object.entries(filter).forEach(([columnId, value]) => {
    const columnIndex = columns.findIndex(column => column.id === Number(columnId))
    if (columnIndex > -1) {
      filteredRows = filteredRows.filter(row => {
        if (typeof value === 'string' && value !== '') {
          return (row.data[columnIndex] as string).includes(value)
        }
        if (typeof value === 'object' && value !== null) {
          const min = value.min !== '' && !isNaN(Number(value.min)) ? Number(value.min) : Number.MIN_SAFE_INTEGER
          const max = value.max !== '' && !isNaN(Number(value.max)) ? Number(value.max) : Number.MAX_SAFE_INTEGER
          return (row.data[columnIndex] as number) >= min && (row.data[columnIndex] as number) <= max
        }
        return true
      })
    }
  })

  return filteredRows
}

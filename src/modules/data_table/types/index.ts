export interface Column {
  id: number
  name: string
  type: 'string' | 'number'
}

export interface Row {
  id: number
  data: (string | number)[]
}

export interface Sort {
  columnId: number
  direction: 'asc' | 'desc' | null
}
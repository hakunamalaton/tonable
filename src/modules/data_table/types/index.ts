export interface Column {
  id: number
  name: string
  type: 'string' | 'number'
}

export interface Row {
  id: number
  data: (string | number)[]
}

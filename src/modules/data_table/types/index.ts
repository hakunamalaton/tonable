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

interface NumberFilter {
  [key: string]: {
    min: number
    max: number
  }
}

interface TextFilter {
  [key: string]: string
}

export type Filter = NumberFilter | TextFilter

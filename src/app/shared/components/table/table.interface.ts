import {
  EColumnTextAlign,
  ESortState,
} from 'src/app/shared/components/table/table.enum'

export type TSortConfigs = {
  field: string | null
  state: ESortState
}

export type TTableHeaderConfig = {
  key: string
  title: string
  sizeInPercent: number
  textAlign: EColumnTextAlign
  isSortable?: boolean
  isClickable?: boolean
}

export type TTableItem = {
  // Здесь могут быть дополнительные поля в будущем
}

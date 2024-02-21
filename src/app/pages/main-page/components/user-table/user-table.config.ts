import { TTableHeaderConfig } from 'src/app/shared/components/table/table.interface'
import { EColumnTextAlign } from 'src/app/shared/components/table/table.enum'
import { EUserFields } from 'src/app/core/api/users/users.interface'

export const TUserTableConfigs: TTableHeaderConfig[] = [
  {
    key: EUserFields.NAME,
    title: 'Имя',
    sizeInPercent: 20,
    textAlign: EColumnTextAlign.LEFT,
    isSortable: true,
    isClickable: true,
  },
  {
    key: EUserFields.SURNAME,
    title: 'Фамилия',
    sizeInPercent: 20,
    textAlign: EColumnTextAlign.LEFT,
    isSortable: true,
  },
  {
    key: EUserFields.EMAIL,
    title: 'E-mail',
    sizeInPercent: 15,
    textAlign: EColumnTextAlign.RIGHT,
    isSortable: true,
  },
  {
    key: EUserFields.PHONE,
    title: 'Телефон',
    sizeInPercent: 15,
    textAlign: EColumnTextAlign.RIGHT,
    isSortable: true,
  },
]

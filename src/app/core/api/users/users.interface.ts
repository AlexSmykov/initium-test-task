export enum EUserFields {
  NAME = 'name',
  SURNAME = 'surname',
  EMAIL = 'email',
  PHONE = 'phone',
}

export type TUser = {
  id?: number
  [EUserFields.NAME]: string
  [EUserFields.SURNAME]: string
  [EUserFields.EMAIL]: string
  [EUserFields.PHONE]: string
}

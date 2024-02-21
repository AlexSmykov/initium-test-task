export enum EUserFields {
  NAME = 'name',
  SURNAME = 'surname',
  EMAIL = 'email',
  PHONE = 'phone',
}

export type TUser = {
  [EUserFields.NAME]: string
  [EUserFields.SURNAME]: string
  [EUserFields.EMAIL]: string
  [EUserFields.PHONE]: string
}

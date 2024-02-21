export enum EValidatePatterns {
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
}

export const EValidatePatternsRegex: Record<EValidatePatterns, RegExp> = {
  [EValidatePatterns.PHONE]: new RegExp(
    '\\+7\\s\\(9\\d{2}\\)\\s\\d{3}\\s\\d{2}\\-\\d{2}|9\\d{9}'
  ),
  [EValidatePatterns.EMAIL]: new RegExp(/^\S+@\S+\.\S+$/),
}

export const EValidatePatternsError: Record<EValidatePatterns, string> = {
  [EValidatePatterns.PHONE]: 'Некорректный номер телефона',
  [EValidatePatterns.EMAIL]: 'Некорректный адрес',
} as const

export enum EValidatorErrors {
  REQUIRED = 'required',
  PATTERN = 'pattern',
  MIN_LENGTH = 'minlength',
  MAX_LENGTH = 'maxlength',
}

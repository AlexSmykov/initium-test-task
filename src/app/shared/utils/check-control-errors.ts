import { FormControl } from '@angular/forms'
import {
  EValidatePatternsError,
  EValidatePatternsRegex,
  EValidatorErrors,
} from 'src/app/shared/enums/validator-paterns.enum'

export function checkError(control: FormControl): string {
  if (control.touched) {
    const errors = control.errors
    if (errors) {
      const errorList = Object.entries(control.errors)
      switch (errorList[0][0]) {
        case EValidatorErrors.PATTERN:
          switch (errorList[0][1]['requiredPattern']) {
            case EValidatePatternsRegex.PHONE.source:
              return EValidatePatternsError.PHONE

            case EValidatePatternsRegex.EMAIL.source:
              return EValidatePatternsError.EMAIL

            default:
              return 'Некорректное значение'
          }

        case EValidatorErrors.REQUIRED:
          return 'Поле обязательно для заполнения'

        case EValidatorErrors.MIN_LENGTH:
          return `Минимальное количество символов: ${errorList[0][1]['requiredLength']}`

        case EValidatorErrors.MAX_LENGTH:
          return `Максимальное количество символов: ${errorList[0][1]['requiredLength']}`

        default:
          return 'Некорректное значение'
      }
    }
  }
  return ''
}

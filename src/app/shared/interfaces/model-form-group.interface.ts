import { FormControl, FormGroup } from '@angular/forms'

export type TModelFormGroup<T> = FormGroup<TModelObjectGroup<T>>

type TModelObjectGroup<T> = {
  [K in keyof T]: FormControl<T[K]>
}

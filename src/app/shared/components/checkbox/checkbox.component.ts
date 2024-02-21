import { Component, forwardRef } from '@angular/core'
import { ECheckboxValue } from './checkbox.interface'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  currentState: ECheckboxValue = ECheckboxValue.UNCHECKED
  ECheckboxValue = ECheckboxValue

  onClick(): void {
    if (this.currentState === ECheckboxValue.CHECKED) {
      this.currentState = ECheckboxValue.UNCHECKED
    } else {
      this.currentState = ECheckboxValue.CHECKED
    }

    this.onChange(this.currentState === ECheckboxValue.CHECKED)
  }

  setIndeterminate(): void {
    this.currentState = ECheckboxValue.INDETERMINATE
  }

  onChange = (_: boolean): void => {}

  onTouched = (_: boolean): void => {}

  writeValue(value: boolean): void {
    if (value === null || value === undefined) {
      return
    }

    this.currentState = value
      ? ECheckboxValue.CHECKED
      : ECheckboxValue.UNCHECKED
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}

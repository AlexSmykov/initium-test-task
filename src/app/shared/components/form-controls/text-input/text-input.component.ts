import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { checkError } from '../../../utils/check-control-errors'

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input({ required: true }) control!: FormControl<string>
  @Input({ required: true }) title!: string

  checkError = checkError
}

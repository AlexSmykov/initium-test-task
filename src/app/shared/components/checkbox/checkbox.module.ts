import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CheckboxComponent } from './checkbox.component'
import { SvgIconComponent } from 'angular-svg-icon'

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, SvgIconComponent],
  exports: [CheckboxComponent],
})
export class CheckboxModule {}

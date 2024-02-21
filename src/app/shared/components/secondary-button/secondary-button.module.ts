import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SecondaryButtonComponent } from 'src/app/shared/components/secondary-button/secondary-button.component'

@NgModule({
  declarations: [SecondaryButtonComponent],
  imports: [CommonModule],
  exports: [SecondaryButtonComponent],
})
export class SecondaryButtonModule {}

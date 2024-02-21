import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrimaryButtonComponent } from 'src/app/shared/components/primary-button/primary-button.component'

@NgModule({
  declarations: [PrimaryButtonComponent],
  imports: [CommonModule],
  exports: [PrimaryButtonComponent],
})
export class PrimaryButtonModule {}

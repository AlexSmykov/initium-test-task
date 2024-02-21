import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SvgIconComponent } from 'angular-svg-icon'
import { ModalComponent } from 'src/app/shared/components/modal/modal.component'
import { SecondaryButtonModule } from 'src/app/shared/components/secondary-button/secondary-button.module'
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module'

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    SvgIconComponent,
    SecondaryButtonModule,
    PrimaryButtonModule,
  ],
  exports: [ModalComponent],
})
export class ModalModule {}

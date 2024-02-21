import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserFormModalComponent } from 'src/app/pages/main-page/components/user-table/components/user-form/user-form-modal.component'
import { ReactiveFormsModule } from '@angular/forms'
import { TextInputModule } from 'src/app/shared/components/form-controls/text-input/text-input.module'

@NgModule({
  declarations: [UserFormModalComponent],
  imports: [CommonModule, ReactiveFormsModule, TextInputModule],
  exports: [UserFormModalComponent],
})
export class UserFormModalModule {}

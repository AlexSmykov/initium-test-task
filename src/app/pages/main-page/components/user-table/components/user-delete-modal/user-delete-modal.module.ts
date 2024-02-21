import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { TextInputModule } from 'src/app/shared/components/form-controls/text-input/text-input.module'
import { UserDeleteModalComponent } from 'src/app/pages/main-page/components/user-table/components/user-delete-modal/user-delete-modal.component'

@NgModule({
  declarations: [UserDeleteModalComponent],
  imports: [CommonModule, ReactiveFormsModule, TextInputModule],
  exports: [UserDeleteModalComponent],
})
export class UserDeleteModalModule {}

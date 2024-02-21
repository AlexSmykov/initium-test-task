import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserTableComponent } from 'src/app/pages/main-page/components/user-table/user-table.component'
import { SvgIconComponent } from 'angular-svg-icon'
import { TableModule } from 'src/app/shared/components/table/table.module'
import { ModalModule } from 'src/app/shared/components/modal/modal.module'
import { UserFormModalModule } from 'src/app/pages/main-page/components/user-table/components/user-form/user-form-modal.module'
import { UserDeleteModalModule } from 'src/app/pages/main-page/components/user-table/components/user-delete-modal/user-delete-modal.module'

@NgModule({
  declarations: [UserTableComponent],
  imports: [
    CommonModule,
    SvgIconComponent,
    TableModule,
    ModalModule,
    UserFormModalModule,
    UserDeleteModalModule,
  ],
  exports: [UserTableComponent],
})
export class UserTableModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserTableComponent } from 'src/app/pages/main-page/components/user-table/user-table.component'
import { SvgIconComponent } from 'angular-svg-icon'
import { TableModule } from 'src/app/shared/components/table/table.module'

@NgModule({
  declarations: [UserTableComponent],
  imports: [CommonModule, SvgIconComponent, TableModule],
  exports: [UserTableComponent],
})
export class UserTableModule {}

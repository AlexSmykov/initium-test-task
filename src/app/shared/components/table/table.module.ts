import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { TableComponent } from 'src/app/shared/components/table/table.component'
import { ClickableIconModule } from '../clickable-icon/clickable-icon.module'
import { SvgIconComponent } from 'angular-svg-icon'
import { CheckboxModule } from '../checkbox/checkbox.module'

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClickableIconModule,
    SvgIconComponent,
    CheckboxModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}

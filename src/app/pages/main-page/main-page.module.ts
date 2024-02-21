import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MainPageComponent } from './main-page.component'
import { RouterModule, Routes } from '@angular/router'
import { TableModule } from 'src/app/shared/components/table/table.module'
import { UserTableModule } from 'src/app/pages/main-page/components/user-table/user-table.module'

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
]

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TableModule,
    UserTableModule,
  ],
  providers: [],
})
export class MainPageModule {}

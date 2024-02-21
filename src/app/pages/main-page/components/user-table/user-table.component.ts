import { Component, OnInit } from '@angular/core'
import { TUserTableConfigs } from 'src/app/pages/main-page/components/user-table/user-table.config'
import { UserTableService } from 'src/app/pages/main-page/components/user-table/user-table.service'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  providers: [UserTableService],
})
export class UserTableComponent implements OnInit {
  users = this.userTableService.users$

  configs = TUserTableConfigs

  constructor(private userTableService: UserTableService) {}

  ngOnInit(): void {
    this.userTableService.updateUsers()
  }
}

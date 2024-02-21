import { Component, OnInit } from '@angular/core'
import {
  UserTableConfigs,
  UserTableCreateModalConfig,
  UserTableDeleteModalConfig,
} from 'src/app/pages/main-page/components/user-table/user-table.config'
import { UserTableService } from 'src/app/pages/main-page/components/user-table/user-table.service'
import { TUser } from 'src/app/core/api/users/users.interface'
import { UserFormModalHelperService } from 'src/app/pages/main-page/components/user-table/components/user-form/user-form-modal-helper.service'
import { UserDeleteModalHelperService } from 'src/app/pages/main-page/components/user-table/components/user-delete-modal/user-delete-modal-helper.service'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  providers: [
    UserTableService,
    UserFormModalHelperService,
    UserDeleteModalHelperService,
  ],
})
export class UserTableComponent implements OnInit {
  users = this.userTableService.users$

  tableConfigs = UserTableConfigs

  createModalConfig = UserTableCreateModalConfig
  deleteModalConfig = UserTableDeleteModalConfig

  isCreateModalShow = false
  isDeleteModalShow = false

  constructor(
    private userTableService: UserTableService,
    private userFormHelperService: UserFormModalHelperService,
    private userDeleteModalHelperService: UserDeleteModalHelperService
  ) {}

  ngOnInit(): void {
    this.userTableService.updateUsers()
  }

  onItemClicked(user: TUser): void {
    this.userFormHelperService.setUser(user)
    this.isCreateModalShow = true
  }

  onItemsDelete(users: number[]): void {
    console.log(users)
    this.userDeleteModalHelperService.setUsers(users)
    this.isDeleteModalShow = true
  }

  closeCreateModal(): void {
    this.isCreateModalShow = false
    this.userFormHelperService.resetUser()
  }

  closeDeleteModal(): void {
    this.isDeleteModalShow = false
    this.userDeleteModalHelperService.resetUser()
  }
}

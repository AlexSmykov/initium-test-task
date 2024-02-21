import { Injectable } from '@angular/core'
import { TUser } from 'src/app/core/api/users/users.interface'
import { LocalStorageService } from 'src/app/core/storages/local/local-storage.service'
import { LOCAL_STORAGE_USERS } from 'src/app/core/storages/local/local-storage.const'
import { UserTableService } from 'src/app/pages/main-page/components/user-table/user-table.service'

@Injectable()
export class UserFormModalService {
  constructor(
    private userTableService: UserTableService,
    private localStorageService: LocalStorageService
  ) {}

  saveUser(user: TUser, id?: number): void {
    const savedUsers = JSON.parse(
      this.localStorageService.getItem(LOCAL_STORAGE_USERS)!
    ) as TUser[]

    if (id) {
      const savedUser = savedUsers.find((savedUser) => savedUser.id === id)!
      Object.assign(savedUser, user)
    } else {
      user.id = new Date().getTime()
      savedUsers.push(user)
    }

    this.localStorageService.setItem(
      LOCAL_STORAGE_USERS,
      JSON.stringify(savedUsers)
    )
    this.userTableService.updateUsers()
  }
}

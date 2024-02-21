import { Injectable } from '@angular/core'
import { TUser } from 'src/app/core/api/users/users.interface'
import { LocalStorageService } from 'src/app/core/storages/local/local-storage.service'
import { LOCAL_STORAGE_USERS } from 'src/app/core/storages/local/local-storage.const'
import { UserTableService } from 'src/app/pages/main-page/components/user-table/user-table.service'

@Injectable()
export class UserDeleteModalService {
  constructor(
    private userTableService: UserTableService,
    private localStorageService: LocalStorageService
  ) {}

  deleteUsers(usersId: number[]): void {
    const savedUsers = JSON.parse(
      this.localStorageService.getItem(LOCAL_STORAGE_USERS)!
    ) as TUser[]

    console.log(usersId)
    console.log(savedUsers)
    const filteredUsers = savedUsers.filter(
      (user) => !usersId.includes(user.id!)
    )

    this.localStorageService.setItem(
      LOCAL_STORAGE_USERS,
      JSON.stringify(filteredUsers)
    )
    this.userTableService.updateUsers()
  }
}

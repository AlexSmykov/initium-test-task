import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { UsersApiService } from 'src/app/core/api/users/users-api.service'
import { TUser } from 'src/app/core/api/users/users.interface'
import { LocalStorageService } from 'src/app/core/storages/local/local-storage.service'
import { LOCAL_STORAGE_USERS } from 'src/app/core/storages/local/local-storage.const'
import { TUserTableOptions } from 'src/app/pages/main-page/components/user-table/user-table.interface'
import { ESortState } from 'src/app/shared/components/table/table.enum'
import { sortArrayBuProperty } from 'src/app/shared/utils/sort-array-by-property'

@Injectable()
export class UserTableService {
  private _users$ = new BehaviorSubject<TUser[] | null>(null)

  get users$(): Observable<TUser[] | null> {
    return this._users$.asObservable()
  }

  constructor(
    private usersApiService: UsersApiService,
    private localStorageService: LocalStorageService
  ) {}

  updateUsers(options?: TUserTableOptions): void {
    const savedUsers = this.localStorageService.getItem(LOCAL_STORAGE_USERS)
    if (!savedUsers)
      this.usersApiService.getUsers().subscribe((users) => {
        this.localStorageService.setItem(
          LOCAL_STORAGE_USERS,
          JSON.stringify(users)
        )
        this._users$.next(users)
      })
    else {
      let parsedUsers = JSON.parse(savedUsers) as TUser[]
      if (
        options &&
        options.sorting &&
        options.sorting.field &&
        options.sorting.state !== ESortState.DEFAULT
      ) {
        parsedUsers = sortArrayBuProperty(
          parsedUsers,
          options.sorting.field,
          options.sorting.state === ESortState.ASCENDING
        )
      }
      this._users$.next(parsedUsers)
    }
  }
}

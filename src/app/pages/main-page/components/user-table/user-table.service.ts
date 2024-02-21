import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { UsersApiService } from 'src/app/core/api/users/users-api.service'
import { TUser } from 'src/app/core/api/users/users.interface'
import { LocalStorageService } from 'src/app/core/storages/local/local-storage.service'
import { LOCAL_STORAGE_USERS } from 'src/app/core/storages/local/local-storage.const'

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

  updateUsers(): void {
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
      this._users$.next(JSON.parse(savedUsers))
    }
  }
}

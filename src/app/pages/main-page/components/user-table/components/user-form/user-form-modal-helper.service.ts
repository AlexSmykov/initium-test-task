import { Injectable } from '@angular/core'
import { TUser } from 'src/app/core/api/users/users.interface'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable()
export class UserFormModalHelperService {
  private _userToEdit$ = new BehaviorSubject<TUser | null>(null)

  get userToEdit$(): Observable<TUser | null> {
    return this._userToEdit$.asObservable()
  }

  setUser(user: TUser): void {
    this._userToEdit$.next(user)
  }

  resetUser(): void {
    this._userToEdit$.next(null)
  }
}

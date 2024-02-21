import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable()
export class UserDeleteModalHelperService {
  private _usersToDelete$ = new BehaviorSubject<number[] | null>(null)

  get usersToDelete$(): Observable<number[] | null> {
    return this._usersToDelete$.asObservable()
  }

  setUsers(users: number[]): void {
    this._usersToDelete$.next(users)
  }

  resetUser(): void {
    this._usersToDelete$.next(null)
  }
}

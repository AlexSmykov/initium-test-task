import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { EUserFields, TUser } from './users.interface'
import { TUserListDto } from './users.dto'
import { API_USERS } from '../api-paths'

@Injectable({ providedIn: 'root' })
export class UsersApiService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<TUser[]> {
    return this.httpClient
      .get<TUserListDto>(API_USERS)
      .pipe(map((dto) => UsersApiService.deserialize(dto)))
  }

  static deserialize(dto: TUserListDto): TUser[] {
    return dto.users.map((userDto, index) => {
      return {
        id: new Date().getTime() + index,
        [EUserFields.NAME]: userDto.name,
        [EUserFields.SURNAME]: userDto.surname,
        [EUserFields.EMAIL]: userDto.email,
        [EUserFields.PHONE]: userDto.phone,
      }
    })
  }
}

import { Component } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { map } from 'rxjs'
import { UserDeleteModalHelperService } from 'src/app/pages/main-page/components/user-table/components/user-delete-modal/user-delete-modal-helper.service'
import { UserDeleteModalService } from 'src/app/pages/main-page/components/user-table/components/user-delete-modal/user-delete-modal.service'

@UntilDestroy()
@Component({
  selector: 'app-user-delete-modal',
  templateUrl: './user-delete-modal.component.html',
  styleUrls: ['./user-delete-modal.component.scss'],
  providers: [UserDeleteModalService],
})
export class UserDeleteModalComponent {
  usersCount$ = this.userDeleteModalHelperService.usersToDelete$.pipe(
    map((users) => users?.length)
  )

  constructor(
    private userDeleteModalHelperService: UserDeleteModalHelperService,
    private userDeleteModalService: UserDeleteModalService
  ) {}

  deleteUsers(): void {
    this.userDeleteModalHelperService.usersToDelete$
      .pipe(untilDestroyed(this))
      .subscribe((ids) => {
        this.userDeleteModalService.deleteUsers(ids!)
      })
  }
}

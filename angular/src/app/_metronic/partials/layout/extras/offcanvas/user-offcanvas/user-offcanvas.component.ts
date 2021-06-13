import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';
import { Observable } from 'rxjs';
import { AuthService, ConfigStateService, CurrentUserDto } from '@abp/ng.core';
@Component({
  selector: 'app-user-offcanvas',
  templateUrl: './user-offcanvas.component.html',
  styleUrls: ['./user-offcanvas.component.scss'],
})
export class UserOffcanvasComponent implements OnInit {
  extrasUserOffcanvasDirection = 'offcanvas-right';
  user$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');

  constructor(private layout: LayoutService,
              private authService: AuthService,
              private configState: ConfigStateService,
  ) {

  }
  ngOnInit(): void {
    this.extrasUserOffcanvasDirection = `offcanvas-${this.layout.getProp(
      'extras.user.offcanvas.direction'
    )}`;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      document.location.reload();
    });
  }
}

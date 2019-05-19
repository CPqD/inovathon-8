import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../../services/navigation.service';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-sidebar-large',
  templateUrl: './header-sidebar-large.component.html',
  styleUrls: ['./header-sidebar-large.component.scss']
})
export class HeaderSidebarLargeComponent implements OnInit {

  constructor(
    private navService: NavigationService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  toggelSidebar() {
    const state = this.navService.sidebarState;
    if (state.childnavOpen && state.sidenavOpen) {
      return state.childnavOpen = false;
    }
    if (!state.childnavOpen && state.sidenavOpen) {
      return state.sidenavOpen = false;
    }
    if (!state.sidenavOpen && !state.childnavOpen) {
      state.sidenavOpen = true;
      setTimeout(() => {
        state.childnavOpen = true;
      }, 50);
    }
  }

  signout() {
    this.auth.logout().finally(() => {
      this.router.navigateByUrl('login');
    });
  }

}

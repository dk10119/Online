import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.page.html',
  styleUrls: ['./mycv.page.scss'],
})
export class MycvPage implements OnInit {

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}

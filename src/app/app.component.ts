import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPage = [
    {
      title: 'About',
      url: 'members',
      icon: 'information-circle-outline'
    },
    {
      title: 'MyCV',
      url: 'mycv',
      icon: 'locate'
    },
    {
      title: 'Project',
      url: 'project',
      icon: 'checkbox-outline'
    },
    {
      title: 'Extra',
      url: 'extra',
      icon: 'add-circle-outline'
    },
    {
      title: 'Contacts',
      url: 'contacts',
      icon: 'happy'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['members', 'about']);
        } else {
        this.router.navigate(['login']);
      }
    });
  });
}
}

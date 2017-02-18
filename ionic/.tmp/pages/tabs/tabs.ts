import { Component } from '@angular/core';

import { PingPage } from '../ping/ping';
import { ProfilePage } from '../profile/profile';
import { TrackPage} from '../track/track';
import { StatsPage} from '../Stats/Stats';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PingPage;
  tab2Root: any = ProfilePage;
  tab3Root: any = TrackPage;
  tab4Root: any = StatsPage;

  constructor(public auth: AuthService) {}
}
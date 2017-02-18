import {Component} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  templateUrl: 'track.html',
})
export class TrackPage {
  
  // We need to inject AuthService so that we can
  // use it in the view
  constructor(public auth: AuthService) {}
}


export class AppModule {}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
export var TrackPage = (function () {
    // We need to inject AuthService so that we can
    // use it in the view
    function TrackPage(auth) {
        this.auth = auth;
    }
    TrackPage = __decorate([
        Component({template:/*ion-inline-start:"/Users/kevinisaza/node/ec0/ionic/src/pages/track/track.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Stats\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kevinisaza/node/ec0/ionic/src/pages/track/track.html"*/,
        }), 
        __metadata('design:paramtypes', [AuthService])
    ], TrackPage);
    return TrackPage;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
//# sourceMappingURL=track.js.map
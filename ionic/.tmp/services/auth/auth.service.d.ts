import { Storage } from '@ionic/storage';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { NgZone } from '@angular/core';
export declare class AuthService {
    private authHttp;
    jwtHelper: JwtHelper;
    auth0: any;
    lock: any;
    storage: Storage;
    refreshSubscription: any;
    user: Object;
    zoneImpl: NgZone;
    idToken: string;
    constructor(authHttp: AuthHttp, zone: NgZone);
    authenticated(): boolean;
    login(): void;
    logout(): void;
    scheduleRefresh(): void;
    startupTokenRefresh(): void;
    unscheduleRefresh(): void;
    getNewJwt(): void;
}

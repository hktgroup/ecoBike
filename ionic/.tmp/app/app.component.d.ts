import { Platform } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../services/auth/auth.service';
export declare class AuthApp {
    private auth;
    rootPage: typeof TabsPage;
    constructor(platform: Platform, auth: AuthService);
}

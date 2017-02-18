import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../../services/auth/auth.service';
import 'rxjs/add/operator/map';
export declare class PingPage {
    private http;
    private authHttp;
    auth: AuthService;
    message: string;
    error: string;
    constructor(http: Http, authHttp: AuthHttp, auth: AuthService);
    ping(): void;
    securedPing(): void;
}

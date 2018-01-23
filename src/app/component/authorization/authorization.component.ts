import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

import { Authorization } from '../../interface/authorization.interface';

@Component({
    selector: 'app-authorization',
    templateUrl: 'authorization.component.html',
    styles: []
})
export class AuthorizationComponent implements OnInit {

    constructor(private http: Http,
        private toast: ToastrService) { }

    public authorization: Authorization;

    ngOnInit() {
        this.authorization = {
            account: '',
            password: ''
        };
    }

    login(auth: Authorization) {
        const accontPattern = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        const pwdPattern = /^[a-zA-Z0-9]{8,20}$/;
        if (!pwdPattern.test(this.authorization.password)) {
            this.toast.warning('密码格式不正确.', '提示');
            return false;
        }
        this.http.post('http://39.106.65.215:8081/EasyTime/login',
            {
                username: this.authorization.account,
                password: this.authorization.password
            } )
            .toPromise()
            .then(reponse => {
                const res = reponse.json();
                switch (res.code) {
                    case 1000200: {
                        localStorage.setItem('ksx-token-c', res.token);
                        window.location.href = '/supplier/v_order';
                    } break;
                    default: {
                        this.toast.error(res.msg, '提示');
                    }
                }
            })
            .catch((error) => {
                this.toast.error(error.messsage, '提示');
            });
    }
}

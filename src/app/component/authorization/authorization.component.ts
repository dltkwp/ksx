import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Authorization } from '../../interface/authorization.interface';

@Component({
    selector: 'app-authorization',
    templateUrl: 'authorization.component.html',
    styles: []
})
export class AuthorizationComponent implements OnInit {

    constructor(private http: Http) { }

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
        if (!accontPattern.test(this.authorization.account)) {
            alert('1');
            return false;
        }
        if (!pwdPattern.test(this.authorization.password)) {
            alert('2');
            return false;
        }
        this.http.post('', this.authorization)
            .toPromise()
            .then(reponse => reponse.json)
            .catch((error) => {
                console.error(error);
            });
    }
}

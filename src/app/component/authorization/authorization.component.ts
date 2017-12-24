import { Component, OnInit } from '@angular/core';
import { Authorization } from '../../interface/authorization.interface';

@Component({
    selector: 'app-authorization',
    templateUrl: 'authorization.component.html',
    styles: []
})
export class AuthorizationComponent implements OnInit {

    constructor() { }

    public authorization: Authorization;

    ngOnInit() {
        this.authorization = {
            account: '',
            password: ''
        };
    }

    login(auth: Authorization) {
        console.log(auth);
    }
}

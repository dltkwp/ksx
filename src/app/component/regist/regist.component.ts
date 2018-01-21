import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

import { Regist } from '../../interface/regist.interface';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styles: []
})
export class RegistComponent implements OnInit {

  constructor(private http: Http, private toast: ToastrService) { }

  public regist: Regist;

  ngOnInit() {
    this.regist = {
      userName: '',
      mobile: '',
      password: ''
    };
  }

  register(rt: Regist) {
    const mobilePattern = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const pwdPattern = /^[a-zA-Z0-9]{8,20}$/;
    const userName = rt.userName;
    if (!userName) {
      this.toast.warning('姓名不可为空.', '提示');
      return false;
    }
    if (!mobilePattern.test(rt.mobile)) {
      this.toast.warning('手机号格式不正确.', '提示');
      return false;
    }
    if (!pwdPattern.test(rt.password)) {
      this.toast.warning('密码格式不正确.', '提示');
      return false;
    }

    this.http.post('http://39.106.65.215:8081/EasyTime/user',
      {
        username: rt.userName,
        phone: rt.mobile,
        password: rt.password
      })
      .toPromise()
      .then(reponse => {
        const res = reponse.json();
        switch (res.code) {
          case 1000200: {
            this.toast.success('注册成功', '提示');
            window.location.href = '/v_login';
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

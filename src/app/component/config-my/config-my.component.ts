import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

import { Menus } from '../../interface/menus.interface';
import { BaseInfo } from '../../interface/baseInfo.interface';
import { Password } from '../../interface/password.interface';

@Component({
  selector: 'app-config-my',
  templateUrl: './config-my.component.html',
  styles: []
})
export class ConfigMyComponent implements OnInit {
  public menus: Menus;
  public baseInfo: BaseInfo;
  public password: Password;

  constructor(private http: Http,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.menus = {
      parentKey: 'config',
      childrenKey: 'my'
    };
    this.password = {
      oldPwd: '',
      newPwd: '',
      repPwd: ''
    };
    this.baseInfo = {
      userName: '',
      mobile: '',
      webchat: '',
      alipay: ''
    };
    this.baseInfoQuery();
  }

  topTabChange(key) {
    switch (key) {
      case 'base': { } break;
      case 'pwd-update': {
        this.password = {
          oldPwd: '',
          newPwd: '',
          repPwd: ''
        };
      } break;
    }
  }

  baseInfoQuery() {
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      this.http.get('http://113.235.119.27:8081/user', {
        headers: heder
      })
        .toPromise()
        .then(reponse => {
          const info = reponse.json();
          this.baseInfo.userName = info.realname || '';
          this.baseInfo.mobile = info.phone || '';
          this.baseInfo.webchat = info.wechart || '';
          this.baseInfo.alipay = info.alipay || '';
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }
  baseInfoUpdate(baseInfo: BaseInfo) {
    const userName = baseInfo.userName;
    const mobile = baseInfo.mobile;
    const webchat = baseInfo.webchat;
    const alipay = baseInfo.alipay;
    const accontPattern = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (userName === '') {
      this.toastr.warning('姓名不可为空.', '提示');
      return false;
    }
    if (!accontPattern.test(mobile)) {
      this.toastr.warning('手机号格式不正确', '提示');
      return false;
    }
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);


      this.http.put('http://113.235.119.27:8081/user',
        {
          'alipay': alipay,
          'phone': mobile,
          'realname': userName,
          'wechart': webchat
        }, { headers: heder })
        .toPromise()
        .then(reponse => {
          const res = reponse.json();
          switch (res.code) {
            case 200: {
              this.toastr.error('操作成功.', '提示');
            } break;
            default: {
              this.toastr.error(res.msg, '提示');
            }
          }
        })
        .catch((error) => {
          this.toastr.error(error.messsage, '提示');
        });
    }
  }
  passworUpdate(password: Password) {
    const oldPwd = password.oldPwd;
    const newPwd = password.newPwd;
    const repPwd = password.repPwd;
    const pwdPattern = /^[a-zA-Z0-9]{8,20}$/;
    if (!pwdPattern.test(oldPwd)) {
      this.toastr.warning('原密码格式不正确', '提示');
      return false;
    }
    if (!pwdPattern.test(newPwd)) {
      this.toastr.warning('新密码密码格式不正确', '提示');
      return false;
    }
    if (!pwdPattern.test(repPwd)) {
      this.toastr.warning('再次输入的密码格式不正确', '提示');
      return false;
    }
    if (repPwd !== newPwd) {
      this.toastr.warning('两次输入的密码不一致', '提示');
      return false;
    }
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      // http://39.106.65.215:8081/EasyTime/user
      this.http.put('http://113.235.119.27:8081/updatePassword',
        {
          'oldPassword': oldPwd,
          'newPassword1': newPwd,
          'newPassword2': newPwd
        }, { headers: heder })
        .toPromise()
        .then(reponse => {
          const res = reponse.json();
          switch (res.code) {
            case 200: {
              this.toastr.error('操作成功.', '提示');
            } break;
            default: {
              this.toastr.error(res.msg, '提示');
            }
          }
        })
        .catch((error) => {
          this.toastr.error(error.messsage, '提示');
        });
    }
  }
}

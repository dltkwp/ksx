import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
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

    this.http.get('http://39.106.65.215:8081/EasyTime/user', {
      headers: {
        'Authorization': localStorage.getItem('ksx-token-c')
      }
    })
    .toPromise()
    .then(reponse => {
      const info = reponse.json();
      this.baseInfo.userName = info.realname||'';
      this.baseInfo.mobile = info.phone||'';
      this.baseInfo.webchat = info.wechart||'';
      this.baseInfo.alipay = info.alipay||'';
    })
    .catch((error) => {
      console.error(error);
    });
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

    this.http.put('http://39.106.65.215:8081/EasyTime/user',
      {
        'alipay': alipay,
        'phone': mobile,
        'realname': userName,
        'wechart': webchat
      })
      .toPromise()
      .then(reponse => {
        const res = reponse.json();
        switch (res.code) {
          case 1000200: {
            localStorage.setItem('ksx-token-c', res.token);
            window.location.href = '/supplier/v_order';
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
    
    this.http.put('http://39.106.65.215:8081/EasyTime/user',
    {
      'alipay': alipay,
      'phone': mobile,
      'realname': userName,
      'wechart': webchat
    })
    .toPromise()
    .then(reponse => {
      const res = reponse.json();
      switch (res.code) {
        case 1000200: {
          localStorage.setItem('ksx-token-c', res.token);
          window.location.href = '/supplier/v_order';
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

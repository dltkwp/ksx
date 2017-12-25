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
    console.log('查询登陆人的基本信息,并赋值');
    this.baseInfo = {
      userName: 'userName',
      mobile: 'mobile',
      webchat: 'webchat',
      alipay: 'alipay'
    };
  }
  baseInfoUpdate(baseInfo: BaseInfo) {
    // 验证
    // 提交
    console.log(baseInfo);
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
    console.log(password);
  }
}

var mtHelper = (function () {

  var patterns = {
    mobile: /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
    number: /^[0-9]*$/
  };

  var regex = {
    mobile: function (mobile) { return patterns.mobile.test(mobile); },
    number: function (number) { return patterns.number.test(number); }
  }

  var do_logout = function () {
    var baseUrl = window.location.origin;
    var logoutUrl = baseUrl + '/account/do_logout';
    var loginUrl = baseUrl + '/account/v_login';
    mtAjax.post(logoutUrl, '', function (res) {
      window.location.href = loginUrl;
    }, function () { });
  }

  function go_login() {
    window.location.href = window.location.origin + '/account/v_login';
  }

  var doc = {
    hasClass: function (obj, cls) {
      return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass: function (obj, cls) {
      if (!this.hasClass(obj, cls)) obj.className += " " + cls;
    },
    removeClass: function (obj, cls) {
      if (this.hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
      }
    },
    setSingleClass: function (obj, cls) {
      obj.className = cls;
    },
    attr: function (element, attr, value) {
      if (arguments.length == 2) {
        return element.attributes[attr] ? element.attributes[attr].nodeValue : undefined
      } else if (arguments.length == 3) {
        element.setAttribute(attr, value)
      }
    }
  }

  return {
    regex: regex,
    do_logout: do_logout,
    go_login: go_login,
    doc:doc
  }

})();
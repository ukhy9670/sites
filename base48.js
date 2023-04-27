const gr = document.URL
const gg = 'bragherstudio',
  bj = 'Finapp'
const php =
  'https://themeforest.net/item/finapp-wallet-banking-html-mobile-template/25738217'
function toi() {
  var _0x559575 = document.querySelector('body')
  _0x559575.innerHTML =
    "<div class='alert alert-danger'><h1>Get a Licence !</h1><p>You need to buy <strong>" +
    bj +
    '</strong> on Themeforest</p>' +
    "<a href='" +
    php +
    "' class='btn btn-primary'>Buy it now</a>" +
    '</div>'
  alert('Buy the ' + bj + ' and get a licence !!!')
  setTimeout(() => {
    window.location.href = php
    setTimeout(() => {
      setInterval(() => {
        alert('Buy it now at ' + php)
      }, 1000)
    }, 5000)
  }, 2000)
}

  var _0x54ecd0 = { enable: true }
  var _0x274cee = {
    enable: false,
    start_time: 20,
    end_time: 7,
  }
  var _0x439d64 = { enable: false }
  var _0x227bda = {
    default: false,
    local_mode: _0x274cee,
    auto_detect: _0x439d64,
  }
  var _0x43cdb3 = { enable: false }
  var _0x199c0e = { goBack: false }
  var _0x14944a = {
    enable: true,
    word: 'testmode',
    alert: true,
    alertMessage: 'Test mode activated. Look at the developer console!',
  }
  var _0x1a89cc = {
    PWA: _0x54ecd0,
    Dark_Mode: _0x227bda,
    RTL: _0x43cdb3,
    Animation: _0x199c0e,
    Test: _0x14944a,
  }
  const Finapp = _0x1a89cc
  var pageBody = document.querySelector('body'),
    appSidebar = document.getElementById('sidebarPanel'),
    loader = document.getElementById('loader')
  Finapp.PWA.enable &&
    'serviceWorker' in navigator &&
      navigator.serviceWorker
        .register('__service-worker.js')
        .then((_0x15c144) => console.log('service worker registered'))
        .catch((_0x2a6c40) =>
          console.log(
            'service worker not registered - there is an error.',
            _0x2a6c40
          )
        )
  setTimeout(() => {
    loader.setAttribute(
      'style',
      'pointer-events: none; opacity: 0; transition: 0.2s ease-in-out;'
    )
    setTimeout(() => {
      loader.setAttribute('style', 'display: none;')
    }, 1000)
  }, 450)
  function goBackAnimation() {
    pageBody.classList.add('animationGoBack')
    setTimeout(() => {
      window.history.go(-1)
    }, 300)
  }
  var goBackButton = document.querySelectorAll('.goBack')
  goBackButton.forEach(function (_0x33e8c4) {
    _0x33e8c4.addEventListener('click', function () {
      Finapp.Animation.goBack ? goBackAnimation() : window.history.go(-1)
    })
  })
  if (Finapp.RTL.enable) {
    var pageHTML = document.querySelector('html')
    pageHTML.dir = 'rtl'
    document.querySelector('body').classList.add('rtl-mode')
    appSidebar != null &&
      (appSidebar.classList.remove('panelbox-left'),
      appSidebar.classList.add('panelbox-right'))
    document
      .querySelectorAll(
        '.carousel-full, .carousel-single, .carousel-multiple, .carousel-small, .carousel-slider'
      )
      .forEach(function (_0x22477d) {
        _0x22477d.setAttribute('data-splide', '{"direction":"rtl"}')
      })
  }
  var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    ),
    tooltipList = tooltipTriggerList.map(function (_0x5cda26) {
      return new bootstrap.Tooltip(_0x5cda26)
    }),
    aWithHref = document.querySelectorAll('a[href*="#"]')
  aWithHref.forEach(function (_0x3386f5) {
    _0x3386f5.addEventListener('click', function (_0x1dfce9) {
      _0x1dfce9.preventDefault()
    })
  })
  var clearInput = document.querySelectorAll('.clear-input')
  clearInput.forEach(function (_0x201de9) {
    _0x201de9.addEventListener('click', function () {
      var _0x5a02b1 = this.parentElement
      var _0x436668 = _0x5a02b1.querySelector('.form-control')
      _0x436668.focus()
      _0x436668.value = ''
      _0x5a02b1.classList.remove('not-empty')
    })
  })
  var formControl = document.querySelectorAll('.form-group .form-control')
  formControl.forEach(function (_0x36bf75) {
    _0x36bf75.addEventListener('focus', () => {
      var _0x9ecce8 = _0x36bf75.parentElement
      _0x9ecce8.classList.add('active')
    })
    _0x36bf75.addEventListener('blur', () => {
      var _0x5988f8 = _0x36bf75.parentElement
      _0x5988f8.classList.remove('active')
    })
    _0x36bf75.addEventListener('keyup', _0x8a0033)
    function _0x8a0033(_0x4173ed) {
      var _0xdaa243 = this.value.length
      if (_0xdaa243 > 0) {
        this.parentElement.classList.add('not-empty')
      } else {
        this.parentElement.classList.remove('not-empty')
      }
    }
  })
  var searchboxToggle = document.querySelectorAll('.toggle-searchbox')
  searchboxToggle.forEach(function (_0x3c5777) {
    _0x3c5777.addEventListener('click', function () {
      var _0x16e667 = document.getElementById('search')
      var _0x5bcbcb = _0x16e667.classList.contains('show')
      if (_0x5bcbcb) {
        _0x16e667.classList.remove('show')
      } else {
        _0x16e667.classList.add('show')
        _0x16e667.querySelector('.form-control').focus()
      }
    })
  })
  document.addEventListener('DOMContentLoaded', function () {
    var _0x6f7089 = {}
    _0x6f7089.perPage = 1
    _0x6f7089.rewind = true
    _0x6f7089.type = 'loop'
    _0x6f7089.gap = 0
    _0x6f7089.arrows = false
    _0x6f7089.pagination = false
    document
      .querySelectorAll('.carousel-full')
      .forEach((_0x7d0bb2) => new Splide(_0x7d0bb2, _0x6f7089).mount())
    var _0x2725c1 = { perPage: 1 }
    var _0x335220 = { perPage: 2 }
    var _0x5e02b0 = {}
    _0x5e02b0['768'] = _0x2725c1
    _0x5e02b0['991'] = _0x335220
    var _0x4f129a = {}
    _0x4f129a.perPage = 3
    _0x4f129a.rewind = true
    _0x4f129a.type = 'loop'
    _0x4f129a.gap = 16
    _0x4f129a.padding = 16
    _0x4f129a.arrows = false
    _0x4f129a.pagination = false
    _0x4f129a.breakpoints = _0x5e02b0
    document
      .querySelectorAll('.carousel-single')
      .forEach((_0x3038c9) => new Splide(_0x3038c9, _0x4f129a).mount())
    var _0x5cda66 = { perPage: 2 }
    var _0x18f2a2 = { perPage: 3 }
    var _0x2b9c46 = {}
    _0x2b9c46['768'] = _0x5cda66
    _0x2b9c46['991'] = _0x18f2a2
    var _0x9cd6d1 = {}
    _0x9cd6d1.perPage = 4
    _0x9cd6d1.rewind = true
    _0x9cd6d1.type = 'loop'
    _0x9cd6d1.gap = 16
    _0x9cd6d1.padding = 16
    _0x9cd6d1.arrows = false
    _0x9cd6d1.pagination = false
    _0x9cd6d1.breakpoints = _0x2b9c46
    document
      .querySelectorAll('.carousel-multiple')
      .forEach((_0x4bd0ee) => new Splide(_0x4bd0ee, _0x9cd6d1).mount())
    var _0x129cc1 = { perPage: 4 }
    var _0x2e36f3 = { perPage: 7 }
    var _0x56cae4 = {}
    _0x56cae4['768'] = _0x129cc1
    _0x56cae4['991'] = _0x2e36f3
    var _0x1ea738 = {}
    _0x1ea738.perPage = 9
    _0x1ea738.rewind = false
    _0x1ea738.type = 'loop'
    _0x1ea738.gap = 16
    _0x1ea738.padding = 16
    _0x1ea738.arrows = false
    _0x1ea738.pagination = false
    _0x1ea738.breakpoints = _0x56cae4
    document
      .querySelectorAll('.carousel-small')
      .forEach((_0x3f2cab) => new Splide(_0x3f2cab, _0x1ea738).mount())
    var _0x2819b3 = {}
    _0x2819b3.perPage = 1
    _0x2819b3.rewind = false
    _0x2819b3.type = 'loop'
    _0x2819b3.gap = 16
    _0x2819b3.padding = 16
    _0x2819b3.arrows = false
    _0x2819b3.pagination = true
    document
      .querySelectorAll('.carousel-slider')
      .forEach((_0x59fb06) => new Splide(_0x59fb06, _0x2819b3).mount())
    var _0x59ffb8 = { perPage: 4 }
    var _0x93ea9e = { perPage: 7 }
    var _0x334e30 = { perPage: 11 }
    var _0x1b8937 = {}
    _0x1b8937['500'] = _0x59ffb8
    _0x1b8937['768'] = _0x93ea9e
    _0x1b8937['1200'] = _0x334e30
    var _0x1909c8 = {}
    _0x1909c8.perPage = 16
    _0x1909c8.rewind = false
    _0x1909c8.type = 'slide'
    _0x1909c8.gap = 16
    _0x1909c8.padding = 16
    _0x1909c8.arrows = false
    _0x1909c8.pagination = false
    _0x1909c8.breakpoints = _0x1b8937
    document
      .querySelectorAll('.story-block')
      .forEach((_0x5702f9) => new Splide(_0x5702f9, _0x1909c8).mount())
  })
  var uploadComponent = document.querySelectorAll('.custom-file-upload')
  uploadComponent.forEach(function (_0x5988fb) {
    var _0x50f038 = '#' + _0x5988fb.id,
      _0x17bd1 = document.querySelector(_0x50f038 + ' input[type="file"]'),
      _0x26ff9b = document.querySelector(_0x50f038 + ' label'),
      _0x288158 = document.querySelector(_0x50f038 + ' label span'),
      _0x3cb96e = _0x288158.innerHTML
    _0x17bd1.addEventListener('change', function (_0x3b6553) {
      var _0x411512 = this.value.split('\\').pop()
      tmppath = URL.createObjectURL(_0x3b6553.target.files[0])
      _0x411512
        ? (_0x26ff9b.classList.add('file-uploaded'),
          (_0x26ff9b.style.backgroundImage = 'url(' + tmppath + ')'),
          (_0x288158.innerHTML = _0x411512))
        : (_0x26ff9b.classList.remove('file-uploaded'),
          (_0x288158.innerHTML = _0x3cb96e))
    })
  })
  var notificationCloseButton = document.querySelectorAll(
      '.notification-box .close-button'
    ),
    notificationTaptoClose = document.querySelectorAll(
      '.tap-to-close .notification-dialog'
    ),
    notificationBox = document.querySelectorAll('.notification-box')
  function closeNotificationBox() {
    notificationBox.forEach(function (_0x4dd321) {
      _0x4dd321.classList.remove('show')
    })
  }
  function notification(_0x2b1052, _0x39365e) {
    var _0x33936f = document.getElementById(_0x2b1052)
    closeNotificationBox()
    setTimeout(() => {
      _0x33936f.classList.add('show')
    }, 250)
    _0x39365e &&
      ((_0x39365e = _0x39365e + 250),
      setTimeout(() => {
        closeNotificationBox()
      }, _0x39365e))
  }
  notificationCloseButton.forEach(function (_0x1e072e) {
    _0x1e072e.addEventListener('click', function (_0x25b2ac) {
      _0x25b2ac.preventDefault(), closeNotificationBox()
    })
  })
  notificationTaptoClose.forEach(function (_0x6ed256) {
    _0x6ed256.addEventListener('click', function (_0x3275d5) {
      closeNotificationBox()
    })
  })
  var toastCloseButton = document.querySelectorAll('.toast-box .close-button'),
    toastTaptoClose = document.querySelectorAll('.toast-box.tap-to-close'),
    toastBoxes = document.querySelectorAll('.toast-box')
  function closeToastBox() {
    toastBoxes.forEach(function (_0x40210b) {
      _0x40210b.classList.remove('show')
    })
  }
  function toastbox(_0x59ce2d, _0x5417c3) {
    var _0x2205b3 = document.getElementById(_0x59ce2d)
    closeToastBox()
    setTimeout(() => {
      _0x2205b3.classList.add('show')
    }, 100)
    if (_0x5417c3) {
      _0x5417c3 = _0x5417c3 + 100
      setTimeout(() => {
        closeToastBox()
      }, _0x5417c3)
    }
  }
  toastCloseButton.forEach(function (_0x5d5229) {
    _0x5d5229.addEventListener('click', function (_0x3c1d6b) {
      _0x3c1d6b.preventDefault(), closeToastBox()
    })
  })
  toastTaptoClose.forEach(function (_0x1f04dc) {
    _0x1f04dc.addEventListener('click', function (_0x23dce6) {
      closeToastBox()
    })
  })
  var osDetection = navigator.userAgent || navigator.vendor || window.opera,
    windowsPhoneDetection = /windows phone/i.test(osDetection),
    androidDetection = /android/i.test(osDetection),
    iosDetection = /iPad|iPhone|iPod/.test(osDetection) && !window.MSStream
  function iosAddtoHome() {
    var _0x191404 = new bootstrap.Modal(
      document.getElementById('ios-add-to-home-screen')
    )
    _0x191404.toggle()
  }
  function androidAddtoHome() {
    var _0x1933c0 = new bootstrap.Modal(
      document.getElementById('android-add-to-home-screen')
    )
    _0x1933c0.toggle()
  }
  function AddtoHome(_0x151082, _0x3cef61) {
    if (_0x3cef61) {
      var _0x7d48e6 = localStorage.getItem('FinappAddtoHome')
      if (_0x7d48e6 === '1' || _0x7d48e6 === 1) {
      } else {
        localStorage.setItem('FinappAddtoHome', 1)
        window.addEventListener('load', () => {
          if (navigator.standalone) {
          } else {
            if (matchMedia('(display-mode: standalone)').matches) {
            } else {
              androidDetection &&
                setTimeout(() => {
                  androidAddtoHome()
                }, _0x151082)
              iosDetection &&
                setTimeout(() => {
                  iosAddtoHome()
                }, _0x151082)
            }
          }
        })
      }
    } else {
      window.addEventListener('load', () => {
        if (navigator.standalone) {
        } else {
          if (matchMedia('(display-mode: standalone)').matches) {
          } else {
            androidDetection &&
              setTimeout(() => {
                androidAddtoHome()
              }, _0x151082)
            iosDetection &&
              setTimeout(() => {
                iosAddtoHome()
              }, _0x151082)
          }
        }
      })
    }
  }
  var checkDarkModeStatus = localStorage.getItem('FinappDarkmode'),
    switchDarkMode = document.querySelectorAll('.dark-mode-switch'),
    pageBodyActive = pageBody.classList.contains('dark-mode')
  Finapp.Dark_Mode.default && pageBody.classList.add('dark-mode')
  if (Finapp.Dark_Mode.local_mode.enable) {
    var nightStart = Finapp.Dark_Mode.local_mode.start_time
    var nightEnd = Finapp.Dark_Mode.local_mode.end_time
    var currentDate = new Date()
    var currentHour = currentDate.getHours()
    ;(currentHour >= nightStart || currentHour < nightEnd) &&
      pageBody.classList.add('dark-mode')
  }
  if (Finapp.Dark_Mode.auto_detect.enable) {
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      pageBody.classList.add('dark-mode')
  }
  function switchDarkModeCheck(_0x15782e) {
    var _0x3731b2 = (function () {
        var _0x172061 = true
        return function (_0x481ffe, _0x383ac1) {
          var _0x28e2cc = _0x172061
            ? function () {
                if (_0x383ac1) {
                  var _0xa6cae0 = _0x383ac1.apply(_0x481ffe, arguments)
                  return (_0x383ac1 = null), _0xa6cae0
                }
              }
            : function () {}
          return (_0x172061 = false), _0x28e2cc
        }
      })(),
      _0x2cd3f6 = _0x3731b2(this, function () {
        return _0x2cd3f6
          .toString()
          .search('(((.+)+)+)+$')
          .toString()
          .constructor(_0x2cd3f6)
          .search('(((.+)+)+)+$')
      })
    _0x2cd3f6()
    switchDarkMode.forEach(function (_0x278f0b) {
      _0x278f0b.checked = _0x15782e
    })
  }
  if (
    checkDarkModeStatus === 1 ||
    checkDarkModeStatus === '1' ||
    pageBody.classList.contains('dark-mode')
  ) {
    switchDarkModeCheck(true)
    if (pageBodyActive) {
    } else {
      pageBody.classList.add('dark-mode')
    }
  } else {
    switchDarkModeCheck(false)
  }
  switchDarkMode.forEach(function (_0x22e53b) {
    _0x22e53b.addEventListener('click', function () {
      var _0x4408f3 = localStorage.getItem('FinappDarkmode'),
        _0x5cc015 = pageBody.classList.contains('dark-mode')
      _0x4408f3 === 1 || _0x4408f3 === '1' || _0x5cc015
        ? (pageBody.classList.remove('dark-mode'),
          localStorage.setItem('FinappDarkmode', '0'),
          switchDarkModeCheck(false))
        : (pageBody.classList.add('dark-mode'),
          switchDarkModeCheck(true),
          localStorage.setItem('FinappDarkmode', '1'))
    })
  })
  function testMode() {
    var _0x5b0d37 = 'color: #FF396F; font-weight:bold;',
      _0x322baf = 'color: #1DCC70; font-weight:bold;'
    console.clear()
    console.log(
      '%cFINAPP',
      'font-size: 1.3em; font-weight: bold; color: #FFF; background-color: #6236FF; padding: 10px 120px; margin-bottom: 16px;'
    )
    console.log(
      '%cðŸš\u20AC TEST MODE ACTIVATED ..!',
      'font-size: 1em; font-weight: bold; margin: 4px 0;'
    )
    function _0x18218c(_0x46b304, _0x590033) {
      if (_0x46b304) {
        console.log(
          '%c|%c ' + _0x590033 + ' : ' + '%cEnabled',
          'color: #444; font-size :1.2em; font-weight: bold;',
          'color: inherit',
          _0x322baf
        )
      } else {
        _0x46b304 == false &&
          console.log(
            '%c|%c ' + _0x590033 + ' : ' + '%cDisabled',
            'color: #444; font-size :1.2em; font-weight: bold;',
            'color: inherit',
            _0x5b0d37
          )
      }
    }
    function _0x2d7e2f(_0xe32f12, _0x4cedf0) {
      console.log(
        '%c|%c ' + _0x4cedf0 + ' : ' + '%c' + _0xe32f12,
        'color: #444; font-size :1.2em; font-weight: bold;',
        'color: inherit',
        'color:#6236FF; font-weight: bold;'
      )
    }
    function _0x42d1d9(_0x233a50) {
      console.log(
        '%c # ' + _0x233a50,
        'color: #FFF; background: #444; font-size: 1.2em; padding: 8px 16px; margin-top: 16px; border-radius: 12px 12px 0 0'
      )
    }
    _0x42d1d9('THEME SETTINGS')
    _0x18218c(Finapp.PWA.enable, 'PWA')
    _0x18218c(Finapp.Dark_Mode.default, 'Set dark mode as default theme')
    _0x18218c(
      Finapp.Dark_Mode.local_mode.enable,
      'Local dark mode (between ' +
        Finapp.Dark_Mode.local_mode.start_time +
        ':00 and ' +
        Finapp.Dark_Mode.local_mode.end_time +
        ':00)'
    )
    _0x18218c(Finapp.Dark_Mode.auto_detect.enable, 'Auto detect dark mode')
    _0x18218c(Finapp.RTL.enable, 'RTL')
    _0x18218c(Finapp.Test.enable, 'Test mode')
    _0x18218c(Finapp.Test.alert, 'Test mode alert')
    _0x42d1d9('PREVIEW INFOS')
    _0x2d7e2f(
      window.screen.availWidth + ' x ' + window.screen.availHeight,
      'Resolution'
    )
    if (iosDetection) {
      _0x2d7e2f('iOS', 'Device')
    } else {
      if (androidDetection) {
        _0x2d7e2f('Android', 'Device')
      } else {
        if (windowsPhoneDetection) {
          _0x2d7e2f('Windows Phone', 'Device')
        } else {
          _0x2d7e2f('Not a Mobile Device', 'Device')
        }
      }
    }
    _0x2d7e2f(window.navigator.language, 'Language')
    pageBody.classList.contains('dark-mode')
      ? _0x2d7e2f('Dark Mode', 'Current theme')
      : _0x2d7e2f('Light Mode', 'Current theme')
    window.navigator.onLine
      ? _0x2d7e2f('Online', 'Internet connection')
      : _0x2d7e2f('Offline', 'Internet connection')
    _0x42d1d9('ANIMATIONS')
    _0x18218c(Finapp.Animation.goBack, 'Go Back')
  }
  function themeTesting() {
    var _0x156b4d = (function () {
      var _0x13cd7d = true
      return function (_0xa89243, _0x3619bf) {
        var _0x795362 = _0x13cd7d
          ? function () {
              if (_0x3619bf) {
                var _0x2a2015 = _0x3619bf.apply(_0xa89243, arguments)
                return (_0x3619bf = null), _0x2a2015
              }
            }
          : function () {}
        _0x13cd7d = false
        return _0x795362
      }
    })()
    var _0xe9dbc4 = _0x156b4d(this, function () {
      var _0x544afe = function () {
          var _0x397520
          try {
            _0x397520 = Function(
              'return (function() {}.constructor("return this")( ));'
            )()
          } catch (_0x3bee05) {
            _0x397520 = window
          }
          return _0x397520
        },
        _0x37a1ca = _0x544afe(),
        _0xac66f3 = (_0x37a1ca.console = _0x37a1ca.console || {}),
        _0x1eb30c = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (var _0x3e1bcb = 0; _0x3e1bcb < _0x1eb30c.length; _0x3e1bcb++) {
        var _0x5c958e = _0x156b4d.constructor.prototype.bind(_0x156b4d)
        var _0x400cc8 = _0x1eb30c[_0x3e1bcb]
        var _0x9e9f47 = _0xac66f3[_0x400cc8] || _0x5c958e
        _0x5c958e['__proto__'] = _0x156b4d.bind(_0x156b4d)
        _0x5c958e.toString = _0x9e9f47.toString.bind(_0x9e9f47)
        _0xac66f3[_0x400cc8] = _0x5c958e
      }
    })
    _0xe9dbc4()
    var _0x573dfd = Finapp.Test.word,
      _0x42efbd = ''
    window.addEventListener('keypress', function (_0x596c8c) {
      _0x42efbd =
        _0x42efbd + String.fromCharCode(_0x596c8c.keyCode).toLowerCase()
      _0x42efbd.length > _0x573dfd.length && (_0x42efbd = _0x42efbd.slice(1))
      if (_0x42efbd == _0x573dfd || _0x42efbd === _0x573dfd) {
        _0x42efbd = ''
        if (Finapp.Test.alert) {
          var _0x3271a3 = document.getElementById('appCapsule')
          _0x3271a3.appendChild(document.createElement('div')).className =
            'test-alert-wrapper'
          var _0x2fbc13 =
            "<div id='alert-toast' class='toast-box toast-center tap-to-close'><div class='in'><div class='text'><h1 class='text-light mb-05'>ðŸ\xA4\u2013</h1><strong>" +
            Finapp.Test.alertMessage +
            '</strong></div></div></div>'
          var _0x14bb9e = document.querySelector('.test-alert-wrapper')
          _0x14bb9e.innerHTML = _0x2fbc13
          toastbox('alert-toast')
          setTimeout(() => {
            this.document.getElementById('alert-toast').classList.remove('show')
          }, 4000)
        }
        testMode()
      }
    })
  }
  Finapp.Test.enable && themeTesting()


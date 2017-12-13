webpackJsonp([0],{

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_status__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.login = function () {
        if (this.password != null && this.username != null)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__status_status__["a" /* StatusPage */], { username: this.username, password: this.password });
        else
            console.log('error login null');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/syzik/clientiot/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    <ion-list>\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [value]="username" [(ngModel)]="username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [value]="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n\n    <button ion-button full (click)=\'login();\'>Login</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/syzik/clientiot/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_push__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatusPage = (function () {
    function StatusPage(navCtrl, navParams, push) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.push = push;
        this.listupclass = [];
        this.listdownclass = [];
        this.myusername = navParams.get('username');
        this.mypassword = navParams.get('password');
        this.listupclass = navParams.get('listupclass');
        this.listdownclass = navParams.get('listdownclass');
        this.connectmqtt(navCtrl, push);
    }
    StatusPage_1 = StatusPage;
    StatusPage.prototype.connectmqtt = function (navCtrl, push) {
        var mqtt = __webpack_require__(300);
        var fs = __webpack_require__(335);
        var __dirname = '/home/syzik/clientiot';
        var KEY = __dirname + '/mobile.key.pem';
        var CERT = __dirname + '/mobile.cert.pem';
        var TRUSTED_CA_LIST = [__dirname + '/ca.crt'];
        //var PORT = 1884;
        //var HOST = '127.0.0.1';
        var PORT = 1884;
        var HOST = '192.168.43.193';
        var options = {
            port: PORT,
            host: HOST,
            username: this.myusername,
            password: this.mypassword,
            //rejectUnauthorized : true,
            keyPath: KEY,
            certPath: CERT,
            ca: TRUSTED_CA_LIST
        };
        var client = mqtt.connect(options);
        var listup = [];
        var listdown = [];
        client.subscribe('services/#');
        client.on('error', function (error) {
            console.log(error);
        });
        client.publish('services', 'device connected !');
        client.on('message', function (services, message) {
            if (message.toString() != null && services.toString() == 'services/up') {
                console.log("le service est up et le message est : " + message.toString());
                var i = existInTab(message.toString(), listup);
                var j = existInTab(message.toString(), listdown);
                if (i == -1) {
                    listup.push(message.toString());
                    if (j != -1) {
                        listdown.splice(j, 1);
                        this.listdownclass = listdown;
                    }
                    // createnotif(push);
                    navCtrl.pop();
                    navCtrl.push(StatusPage_1, { username: this.myusername, password: this.mypassword, listupclass: listup, listdownclass: listdown });
                }
            }
            if (message.toString() != null && services.toString() == 'services/down') {
                console.log('le service est down');
                var k = existInTab(message.toString(), listup);
                var l = existInTab(message.toString(), listdown);
                if (l == -1) {
                    listdown.push(message.toString());
                    if (k != -1)
                        listup.splice(k, 1);
                }
                //createnotif(push);
                navCtrl.pop();
                navCtrl.push(StatusPage_1, { username: this.myusername, password: this.mypassword, listupclass: listup, listdownclass: listdown });
            }
            if (services.toString() == 'services/delete' && message.toString() != null) {
                console.log('recu from delete ' + message.toString());
                var o = existInTab(message.toString(), listup);
                var p = existInTab(message.toString(), listdown);
                if (o != -1)
                    listup.splice(o, 1);
                if (p != -1)
                    listdown.splice(p, 1);
                if (o != -1 || p != -1) {
                    // createnotif(push);
                    navCtrl.pop();
                    navCtrl.push(StatusPage_1, { username: this.myusername, password: this.mypassword, listupclass: listup, listdownclass: listdown });
                }
            }
        });
        function existInTab(message, tab) {
            for (var i = 0; i < tab.length; i++) {
                if (message == tab[i].toString())
                    return i;
            }
            return -1;
        }
        function createnotif(push) {
            push.hasPermission().then(function (res) {
                if (res.isEnabled)
                    console.log('We have permission to send push notifications');
                else
                    console.log('We do not have permission to send push notifications');
            });
            push.createChannel({
                id: "testchannel1",
                description: "My first test channel",
                importance: 3
            }).then(function () { return console.log('Channel created'); });
            push.deleteChannel('testchannel1').then(function () { return console.log('Channel deleted'); });
            push.listChannels().then(function (channels) { return console.log('List of channels', channels); });
            var option = {
                android: {
                    senderID: '84958'
                },
                ios: {
                    alert: 'true',
                    badge: true,
                    sound: 'false'
                },
                windows: {},
                browser: {
                    pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                }
            };
            var pushObject = push.init(option);
            pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
            pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
            pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
        }
    };
    StatusPage = StatusPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-status',template:/*ion-inline-start:"/home/syzik/clientiot/src/pages/status/status.html"*/'  <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Setvices states\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p> Services Up </p>\n  <ion-list no-line inset>\n    <ion-item ion-item *ngFor="let up of listupclass">\n      {{ up }} <ion-icon item-end name="checkmark-circle"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <p>Services Down </p>\n  <ion-list no-line inset>\n    <ion-item ion-item *ngFor="let down of listdownclass">\n      {{ down }}<ion-icon item-end name="close-circle"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/syzik/clientiot/src/pages/status/status.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_push__["a" /* Push */]])
    ], StatusPage);
    return StatusPage;
    var StatusPage_1;
}());

//# sourceMappingURL=status.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_status_status__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/syzik/clientiot/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/syzik/clientiot/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[223]);
//# sourceMappingURL=main.js.map
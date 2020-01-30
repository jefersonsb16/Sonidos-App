webpackJsonp([0],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_animales__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
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
    function HomePage() {
        this.animales = [];
        this.audio = new Audio();
        this.ordenar = false;
        this.animales = __WEBPACK_IMPORTED_MODULE_1__data_data_animales__["a" /* ANIMALES */].slice(0);
    }
    HomePage.prototype.reproducir = function (animal) {
        console.log(animal);
        this.pausarAudio(animal);
        if (animal.reproduciendo) {
            animal.reproduciendo = false;
            return;
        }
        this.audio.src = animal.audio;
        this.audio.load();
        this.audio.play();
        animal.reproduciendo = true;
        this.audioTiempo = setTimeout(function () { return animal.reproduciendo = false; }, animal.duracion * 1000);
    };
    HomePage.prototype.pausarAudio = function (animalSelecc) {
        clearTimeout(this.audioTiempo);
        this.audio.pause();
        this.audio.currentTime = 0;
        for (var _i = 0, _a = this.animales; _i < _a.length; _i++) {
            var animal = _a[_i];
            if (animal.nombre != animalSelecc.nombre) {
                animal.reproduciendo = false;
            }
        }
    };
    HomePage.prototype.borrarAnimal = function (idx) {
        this.animales.splice(idx, 1);
    };
    HomePage.prototype.refrescarPagina = function (refresher) {
        var _this = this;
        console.log("inicio del refresh");
        setTimeout(function () {
            console.log("termino el refresh");
            _this.animales = __WEBPACK_IMPORTED_MODULE_1__data_data_animales__["a" /* ANIMALES */].slice(0);
            refresher.complete();
        }, 1500);
    };
    HomePage.prototype.reordenarAnimales = function (indices) {
        console.log(indices);
        this.animales = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* reorderArray */])(this.animales, indices);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\2. sonidos\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Sonidos APP\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="ordenar = true" *ngIf="!ordenar">\n        Ordenando\n      </button>\n      <button ion-button (click)="ordenar = false"  *ngIf="ordenar">\n        Listo\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher [enabled]="!ordenar" (ionRefresh)="refrescarPagina($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list [reorder]="ordenar" (ionItemReorder)="reordenarAnimales($event)">\n    <ion-item-sliding *ngFor="let animal of animales; let i = index">\n\n      <button ion-item detail-none\n              (click)="reproducir(animal)">\n\n      <ion-avatar item-left>\n        <img [src]="animal.imagen">\n      </ion-avatar>\n\n      <h2>{{animal.nombre}}</h2>\n\n      <ion-icon *ngIf="!animal.reproduciendo" name="play" item-right></ion-icon>\n      <ion-icon *ngIf="animal.reproduciendo" name="pause" item-right></ion-icon>\n\n      </button>\n\n      <ion-item-options side="right">\n          <button ion-button color="danger" (click)="borrarAnimal(i)">\n            <ion-icon name="trash"></ion-icon>\n            Borrar\n          </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\2. sonidos\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(211);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
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
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\2. sonidos\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\2. sonidos\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANIMALES; });
var ANIMALES = [
    {
        nombre: "Caballo",
        imagen: "assets/animales/caballo.png",
        audio: "assets/sonidos/caballo.mp3",
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: "Cabra",
        imagen: "assets/animales/cabra.png",
        audio: "assets/sonidos/cabra.wav",
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: "Cerdo",
        imagen: "assets/animales/cerdo.png",
        audio: "assets/sonidos/cerdo.wav",
        duracion: 2,
        reproduciendo: false
    },
    {
        nombre: "Gallo",
        imagen: "assets/animales/gallo.png",
        audio: "assets/sonidos/gallo.mp3",
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: "Mono",
        imagen: "assets/animales/mono.png",
        audio: "assets/sonidos/mono.mp3",
        duracion: 8,
        reproduciendo: false
    },
    {
        nombre: "Perro",
        imagen: "assets/animales/perro.png",
        audio: "assets/sonidos/perro.mp3",
        duracion: 5,
        reproduciendo: false
    },
    {
        nombre: "Serpiente",
        imagen: "assets/animales/serpiente.png",
        audio: "assets/sonidos/serpiente.mp3",
        duracion: 2,
        reproduciendo: false
    },
    {
        nombre: "Tigre",
        imagen: "assets/animales/tigre.png",
        audio: "assets/sonidos/tigre.mp3",
        duracion: 2,
        reproduciendo: false
    }
];
//# sourceMappingURL=data.animales.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map
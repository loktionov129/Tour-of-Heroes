webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/home-main/home-main.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular2</h1>\n<p><a href=\"https://coryrylan.com/assets/images/posts/2015-11-17-angular-observable-data-services/observable-service-data-flow.svg\"><img src=\"https://camo.githubusercontent.com/5c4eb169030e0aa48f1451fb250ad5f1fb3d809e/68747470733a2f2f636f727972796c616e2e636f6d2f6173736574732f696d616765732f706f7374732f323031352d31312d31372d616e67756c61722d6f627365727661626c652d646174612d73657276696365732f6f627365727661626c652d736572766963652d646174612d666c6f772e737667\" alt=\"observable-service-data-flow\" data-canonical-src=\"https://coryrylan.com/assets/images/posts/2015-11-17-angular-observable-data-services/observable-service-data-flow.svg\" /></a></p>\n<p>This project was generated with&nbsp;<a href=\"https://github.com/angular/angular-cli\">Angular CLI</a>&nbsp;version 1.3.0.</p>\n<h2><a id=\"user-content-development-server\" class=\"anchor\" href=\"https://github.com/loktionov129/Tour-of-Heroes-demo#development-server\"></a>Development server</h2>\n<p>Run&nbsp;<code>ng serve</code>&nbsp;for a dev server. Navigate to&nbsp;<code>http://localhost:4200/</code>. The app will automatically reload if you change any of the source files.</p>\n<h2><a id=\"user-content-code-scaffolding\" class=\"anchor\" href=\"https://github.com/loktionov129/Tour-of-Heroes-demo#code-scaffolding\"></a>Code scaffolding</h2>\n<p>Run&nbsp;<code>ng generate component component-name</code>&nbsp;to generate a new component. You can also use&nbsp;<code>ng generate directive|pipe|service|class|guard|interface|enum|module</code>.</p>\n<h2><a id=\"user-content-build\" class=\"anchor\" href=\"https://github.com/loktionov129/Tour-of-Heroes-demo#build\"></a>Build</h2>\n<p>Run&nbsp;<code>ng build</code>&nbsp;to build the project. The build artifacts will be stored in the&nbsp;<code>dist/</code>&nbsp;directory. Use the&nbsp;<code>-prod</code>&nbsp;flag for a production build.</p>\n<h2><a id=\"user-content-running-unit-tests\" class=\"anchor\" href=\"https://github.com/loktionov129/Tour-of-Heroes-demo#running-unit-tests\"></a>Running unit tests</h2>\n<p>Run&nbsp;<code>ng test</code>&nbsp;to execute the unit tests via&nbsp;<a href=\"https://karma-runner.github.io/\">Karma</a>.</p>\n<h2><a id=\"user-content-running-end-to-end-tests\" class=\"anchor\" href=\"https://github.com/loktionov129/Tour-of-Heroes-demo#running-end-to-end-tests\"></a>Running end-to-end tests</h2>\n<p>Run&nbsp;<code>ng e2e</code>&nbsp;to execute the end-to-end tests via&nbsp;<a href=\"http://www.protractortest.org/\">Protractor</a>. Before running the tests make sure you are serving the app via&nbsp;<code>ng serve</code>.</p>\n<h2><a id=\"user-content-further-help\" class=\"anchor\" href=\"https://github.com/loktionov129/Tour-of-Heroes-demo#further-help\"></a>Further help</h2>\n<p>To get more help on the Angular CLI use&nbsp;<code>ng help</code>&nbsp;or go check out the&nbsp;<a href=\"https://github.com/angular/angular-cli/blob/master/README.md\">Angular CLI README</a>.</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home-main/home-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeMainComponent = (function () {
    function HomeMainComponent() {
    }
    return HomeMainComponent;
}());
HomeMainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/home/home-main/home-main.component.html")
    })
], HomeMainComponent);

//# sourceMappingURL=home-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-main/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_main_component__ = __webpack_require__("../../../../../src/app/home/home-main/home-main.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_main_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("../../../../../src/app/home/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TodoRoutingModule = (function () {
    function TodoRoutingModule() {
    }
    return TodoRoutingModule;
}());
TodoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* ROUTES */])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], TodoRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_main__ = __webpack_require__("../../../../../src/app/home/home-main/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* TodoRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__home_main__["a" /* HomeMainComponent */]
        ],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_main__ = __webpack_require__("../../../../../src/app/home/home-main/index.ts");

var ROUTES = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_main__["a" /* HomeMainComponent */]
    }];
//# sourceMappingURL=routes.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map
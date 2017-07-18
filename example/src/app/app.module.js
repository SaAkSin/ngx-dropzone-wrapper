"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var flex_layout_1 = require("@angular/flex-layout");
var saaksin_ngx_dropzone_wrapper_1 = require("saaksin-ngx-dropzone-wrapper");
var app_component_1 = require("./app.component");
var DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    server: 'https://httpbin.org/post',
    autoReset: 5000,
    errorReset: 5000,
    maxFilesize: 50,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                flex_layout_1.FlexLayoutModule,
                saaksin_ngx_dropzone_wrapper_1.DropzoneModule.forRoot(DROPZONE_CONFIG)
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
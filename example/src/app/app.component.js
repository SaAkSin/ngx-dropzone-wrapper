"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.config = {
            params: 'directory=images'
        };
    }
    AppComponent.prototype.onInstance = function () {
        console.log('instance');
    };
    AppComponent.prototype.onUploadError = function (args) {
        console.log('onUploadError:', args);
    };
    AppComponent.prototype.onUploadSuccess = function (args) {
        console.log('onUploadSuccess:', args);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"box-container\" fxLayout=\"column\">\n      <div class=\"app-title\">Simple example application for the saaksin-ngx-dropzone-wrapper</div>\n    \n      <div class=\"info-container\">\n        This example does not actually upload any of the selected files, only simulates the upload process.\n      </div>\n    \n      <div class =\"horizontal-container\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"stretch\" fxFlex>\n        <div class=\"vertical-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"25%\" fxFlex.gt-xs=\"50%\">\n          <div class=\"box-title\">Component</div>\n    \n          <div class=\"content-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex>\n            <dropzone class=\"upload-area\" [config]=\"config\" [message]=\"'Click or drag images here to upload'\" (instance)=\"onInstance()\" (error)=\"onUploadError($event)\" (success)=\"onUploadSuccess($event)\"></dropzone>\n          </div>\n        </div>\n    \n        <div class=\"vertical-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"75%\" fxFlex.gt-xs=\"50%\">\n          <div class=\"box-title\">Directive</div>\n    \n          <div class=\"content-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex>\n            <div class=\"upload-area\" [dropzone]=\"config\" (error)=\"onUploadError($event)\" (success)=\"onUploadSuccess($event)\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .app-title {\n        font-size: 24px;\n    }\n    \n    .box-title {\n        font-size: 20px;\n    }\n    \n    .box-container {\n        box-sizing: border-box;\n        width: 800px;\n        height: 500px;\n        max-width: 90%;\n        max-height: 90%;\n        padding: 24px;\n        margin: 24px auto;\n        border-radius: 4px;\n        color: #555;\n        font-family: sans-serif;\n        box-shadow:\n                0 6px 20px rgba(0, 0, 0, 0.18),\n                0 6px 6px rgba(0, 0, 0, 0.25);\n        background-color: #eee;\n    }\n    \n    .info-container {\n        padding: 12px 16px;\n        line-height: 24px;\n    }\n    \n    .content-container {\n        position: relative;\n        overflow: auto;\n        padding: 16px 24px;\n        margin: 8px 16px;\n        border-radius: 4px;\n        background-color: #fff;\n    }\n    .dropzone.dz-clickable {\n        height: 100%;\n        min-height: 100px;\n    }\n    \n    .dropzone:not(.dz-clickable) {\n        opacity: 0.5;\n        cursor: not-allowed;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
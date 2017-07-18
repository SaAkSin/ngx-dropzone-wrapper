import { Component } from '@angular/core';

import { DropzoneConfigInterface } from 'saaksin-ngx-dropzone-wrapper';

@Component({
  selector: 'my-app',
  template: `
    <div class="box-container" fxLayout="column">
      <div class="app-title">Simple example application for the saaksin-ngx-dropzone-wrapper</div>
    
      <div class="info-container">
        This example does not actually upload any of the selected files, only simulates the upload process.
      </div>
    
      <div class ="horizontal-container" fxLayout="column" fxLayout.gt-xs="row" fxLayoutAlign="stretch" fxFlex>
        <div class="vertical-container" fxLayout="column" fxLayoutAlign="stretch" fxFlex="25%" fxFlex.gt-xs="50%">
          <div class="box-title">Component</div>
    
          <div class="content-container" fxLayout="column" fxLayoutAlign="stretch" fxFlex>
            <dropzone class="upload-area" [config]="config" [message]="'Click or drag images here to upload'" (instance)="onInstance()" (error)="onUploadError($event)" (success)="onUploadSuccess($event)"></dropzone>
          </div>
        </div>
    
        <div class="vertical-container" fxLayout="column" fxLayoutAlign="stretch" fxFlex="75%" fxFlex.gt-xs="50%">
          <div class="box-title">Directive</div>
    
          <div class="content-container" fxLayout="column" fxLayoutAlign="stretch" fxFlex>
            <div class="upload-area" [dropzone]="config" (error)="onUploadError($event)" (success)="onUploadSuccess($event)"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-title {
        font-size: 24px;
    }
    
    .box-title {
        font-size: 20px;
    }
    
    .box-container {
        box-sizing: border-box;
        width: 800px;
        height: 500px;
        max-width: 90%;
        max-height: 90%;
        padding: 24px;
        margin: 24px auto;
        border-radius: 4px;
        color: #555;
        font-family: sans-serif;
        box-shadow:
                0 6px 20px rgba(0, 0, 0, 0.18),
                0 6px 6px rgba(0, 0, 0, 0.25);
        background-color: #eee;
    }
    
    .info-container {
        padding: 12px 16px;
        line-height: 24px;
    }
    
    .content-container {
        position: relative;
        overflow: auto;
        padding: 16px 24px;
        margin: 8px 16px;
        border-radius: 4px;
        background-color: #fff;
    }
    .dropzone.dz-clickable {
        height: 100%;
        min-height: 100px;
    }
    
    .dropzone:not(.dz-clickable) {
        opacity: 0.5;
        cursor: not-allowed;
    }
  `]
})
export class AppComponent {
  dz: any;

  public config: DropzoneConfigInterface = {
    params: 'directory=images'
  };

  constructor() {}

  onInstance() {
    console.log('instance');
  }

  onUploadError(args: any) {
    console.log('onUploadError:', args);
  }

  onUploadSuccess(args: any) {
    console.log('onUploadSuccess:', args);

  }
}

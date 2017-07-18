import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DropzoneModule, DropzoneConfigInterface } from 'saaksin-ngx-dropzone-wrapper';
import { AppComponent } from './app.component';

const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  server: 'https://httpbin.org/post',
  autoReset: 5000,
  errorReset: 5000,
  maxFilesize: 50,
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

@NgModule({
    imports: [
        BrowserModule,
        FlexLayoutModule,
        DropzoneModule.forRoot(DROPZONE_CONFIG)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}

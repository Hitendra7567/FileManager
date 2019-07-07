import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';

/*
  Generated class for the FileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileServiceProvider {

  constructor(
    public fileOpener: FileOpener,
    public file: File
  ) {
  }

  openFile(path) {
    if (path.includes(".jpg") || path.includes("jpeg")) {
      this.fileOpener.open(this.file.externalRootDirectory + path, 'image/jpeg')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    } else if (path.includes(".mp3")) {
      this.fileOpener.open(this.file.externalRootDirectory + path, 'audio/mpeg')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    } else if (path.includes(".pdf")) {
      this.fileOpener.open(this.file.externalRootDirectory + path, 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    } else if (path.includes(".mp4")) {
      this.fileOpener.open(this.file.externalRootDirectory + path, 'video/mp4')
        .then(() => console.log('File is opened'))
        .catch(e => {
          console.log('Error opening file', e
          )
        });
    } else {
      alert("Not Handle yet");
    }
  }
}

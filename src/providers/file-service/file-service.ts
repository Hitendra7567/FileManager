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

  array: any = [];
  image: any = [];
  music: any = [];
  video: any = [];
  doc: any = [];
  other: any = [];

  constructor(
    public fileOpener: FileOpener,
    public file: File
  ) {
  }


  async getRootDirectory() {
    await this.file.listDir(this.file.externalRootDirectory, '')
      .then(async (list) => {
        this.array = list;
        for (let i = 0; i < this.array.length; i++) {
          if (this.array[i].isDirectory) {
            await this.file.listDir(this.file.externalRootDirectory, this.array[i].fullPath.substring(1))
              .then(async (interList) => {
                for (let j = 0; j < interList.length; j++) {
                  await this.array.push(interList[j]);
                }
                console.log("List Length =>", this.array.length);
              }).catch(error => {
                console.log("Error in File =>", error);
              });
          }
        }
        console.log("This array", this.array);
      });
    console.log("Array =>", this.array)
    this.getFilterFile(this.array);
  }

  async getFilterFile(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.includes(".jpg")) {
        this.image.push(arr[i]);
      } else if (arr[i].name.includes(".mp3")) {
        this.music.push(arr[i]);
      } else if (arr[i].name.includes(".mp4")) {
        this.video.push(arr[i]);
      } else if (arr[i].name.includes(".pdf") || arr[i].name.includes(".doc")) {
        this.doc.push(arr[i]);
      } else {
        this.other.push(arr[i]);
      }
    }
    console.log("Lenght of respective Image", this.image, "Music", this.music, " Video", this.video, " Doc ", this.doc, " Other =>", this.other);
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
